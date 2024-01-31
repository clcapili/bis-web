import { client } from 'client';
import Link from 'next/link';
/**
 * A navigation menu component.
 * @param {Props} props The props object.
 * @param {string} props.menuLocation A matching menu location string that can be used to query from WP GraphQL.
 * @param {React.ReactElement} props.children The children to be rendered.
 * @param {string} props.className An optional className to be added to the component.
 * @return {React.ReactElement} The NavigationMenu component.
 */
export default function NavigationMenu({ className, menuLocation, children }) {
  const { useQuery } = client;

  const { nodes: menuItems } = useQuery().menuItems({
    where: {
      location: menuLocation,
    },
  });

  if (!menuLocation) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(
        'The menuLocation prop is required on the <NavigationMenu /> component.'
      );
    }

    return null;
  }

  if (!menuItems) {
    return null;
  }

  let hierarchicalMenuItems = flatListToHierarchical(menuItems, {
    idKey: "id",
    childrenKey: "children",
    parentKey: "parentId",
  });
  
  return (
    <nav
      className={className}
      role="navigation"
      aria-label={`${menuItems[0]?.menu.node.name} menu`}
    >
        {hierarchicalMenuItems.map((item) => {
          const { id, path, label, children } = item;
          
          if (children.length > 0) {
            return (
              <div className="dropdown" key={id ?? ''}>
                <a className="dropdown-toggle text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{label ?? ''}</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink"> 
                  {children.map((childItem, i) => {
                    return(
                      <Link key={i} href={childItem.path ?? ''}>
                        <a className="sub-menu-item text-decoration-none">
                          <li className="dropdown-item" key={childItem.id ?? ''}>
                            {childItem.label ?? ''}
                          </li>
                        </a>
                      </Link>
                      
                    )
                  })}
                </ul>
              </div>
            )
            
          } else {
            return (
              <Link key={id ?? ''} href={path ?? ''}>
                <a className="menu-item">{label ?? ''}</a>
              </Link>
            );
          }
        })}
        {children}
    </nav>
  );
}

const flatListToHierarchical = (data = [], {idKey='key',parentKey='parentId',childrenKey='children'} = {}) => {
  const tree = [];
  const childrenOf = {};
  
  data.forEach((item) => {
      const newItem = {...item};
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
      
      childrenOf[id] = childrenOf[id] || [];
      newItem[childrenKey] = childrenOf[id];
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
  });
  return tree;
};