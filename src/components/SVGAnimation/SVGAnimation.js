import lottie from 'lottie-web';
import { useEffect } from 'react';

export default function SVGAnimation({file, id}) {
    let path = '/animations/' + file + '.json';

    useEffect(() => {
        fetch(path)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(new Error(response.statusText) );
                }
              
                return response.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (data && data.error) {
                        if (data.status.code < 10000)
                            return Promise.reject(new Error(data.status.message));
                    }
                    
                    return data;
                });
            })
            .then((json) => {
                lottie.loadAnimation({
                    container: document.getElementById(id),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: json
                });
            })
    }, [path, id]);

    return(
        <div
            id={id}
        ></div>
    )
}