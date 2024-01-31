
export default function handleResize() {

    let rows = [].concat(...Element.prototype.querySelectorAll.call(document.documentElement, '[data-mh]'));
    
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        if (row) {
            let classes = row.dataset.mh.split(' ');
            for (let j = 0; j < classes.length; j++) {
                let items = [].concat(...Element.prototype.querySelectorAll.call(row, classes[j]));
                resize(items);
            }    
        }
    }
}

function resize(items) {
    if (items.length > 0) {
        let newHeight = 0;

        for (let i = 0; i < items.length; i++) {
            items[i].style.height = 'auto';
        }

        for (let i = 0; i < items.length; i++) {
            let currentHeight = items[i].offsetHeight;
            if (currentHeight > newHeight) {
                newHeight = currentHeight
            }
        }

        if (newHeight > 0) {
            for (let i = 0; i < items.length; i++) {
                items[i].style.height = newHeight + "px";
            }
        }
    }
}
