import React from 'react';

const LoremNumber = ({match}) => {

    let text = '';

    switch (parseInt(match.params.id)) {
        case 1:
            text = 'Integer nisi purus, hendrerit cursus laoreet ut, pharetra sed eros. Ut id lorem in tortor ultrices dignissim. Pellentesque molestie libero sit amet ultrices interdum. Suspendisse ac lacus ullamcorper, commodo mi nec, congue purus. Etiam scelerisque varius magna at mattis. Sed nec rutrum est, at fringilla nisi. Fusce scelerisque pellentesque ligula, eu commodo magna lobortis convallis. Praesent eu auctor turpis. Nam tristique vestibulum neque, eu pretium mi malesuada rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis finibus ipsum. Aenean rhoncus felis eros, in accumsan sem mollis ut. Sed venenatis urna eget metus tristique elementum. Mauris et lorem dictum, tincidunt nisl eget, finibus mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce maximus egestas massa vel cursus.';
            break;
        case 2:
            text='Duis laoreet suscipit ligula, vitae ullamcorper turpis. Donec molestie, lacus in pretium iaculis, lacus nisl consequat nibh, et posuere massa massa in tellus. Sed lobortis, diam ut lobortis porta, augue metus tempus lorem, quis lobortis augue felis in eros. Aenean auctor euismod quam eu sagittis. Fusce a leo metus. Aenean finibus varius hendrerit. Curabitur ac elementum arcu.';
            break;
        case 3:
            text='In finibus placerat diam, eget vulputate lectus suscipit non. Pellentesque fermentum mi nunc. Etiam ut ligula eros. Fusce dui libero, vulputate nec velit vel, ultricies sodales leo. In lacinia turpis id consectetur ultrices. Morbi feugiat a turpis ac vehicula. Curabitur interdum, eros sit amet efficitur feugiat, ligula purus elementum orci, sit amet feugiat magna sapien sed lectus. Fusce faucibus iaculis nibh, a luctus sapien luctus nec. Quisque id nulla eu massa vehicula faucibus tristique ut purus. Nullam malesuada tortor non hendrerit consectetur. Quisque interdum quam in bibendum vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
            break;
        default:
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper congue metus ac mattis. Curabitur porta diam id leo vehicula, ac luctus dui gravida. Ut varius, massa eget semper fermentum, sapien quam iaculis nisi, in viverra elit lectus vel ex. Duis vulputate suscipit lacus et feugiat. Suspendisse pulvinar id diam sed pulvinar. Praesent ultricies id massa at faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam iaculis eleifend bibendum. Fusce condimentum ornare turpis ac malesuada. Ut sed ipsum a quam consectetur imperdiet sit amet nec magna. In facilisis mauris dapibus sollicitudin interdum. Donec convallis malesuada lectus nec ultrices.';
    }

    return (
        <div>
            <h1>Lorem {match.params.id}</h1>
            <p>
                {text}
            </p>
        </div>
    );
};

export default LoremNumber;