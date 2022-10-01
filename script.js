var Photos;


Photos = ['https://media-exp1.licdn.com/dms/image/C4D22AQESJwwZrZkqVA/feedshare-shrink_1280/0/1633091448768?e=1667433600&v=beta&t=E8VFJJx1xJ0-R0dTZEPS9n4N3cKsBURKg5rB1w9EXZk', 'https://media-exp1.licdn.com/dms/image/C4E22AQHpPxedmc4KmA/feedshare-shrink_2048_1536/0/1659440200038?e=1667433600&v=beta&t=EDLvnPOgUF3YiIXc3THoFYsH-gn2EZb2KgW8WQelDZ0', 'https://media-exp1.licdn.com/dms/image/C4E22AQHFyBS_2OHzfQ/feedshare-shrink_1280/0/1650879296831?e=1667433600&v=beta&t=R4WienSwcfFX5wpZ1tlWj_WiPVYd8KYRnUnJ_6YmNFk'];
let element_slider = document.getElementById('slider');
element_slider.setAttribute("src", 'https://media-exp1.licdn.com/dms/image/C4E22AQHhoB-HaqIUQA/feedshare-shrink_1280/0/1661869802105?e=1667433600&v=beta&t=ri11Mn3PPuQftJlAJcmHeaQgv9B8NnPVIIYiA7mtRsg');


document.getElementById('prev').addEventListener('click', (event) => {
  let element_slider2 = document.getElementById('slider');
  Photos.push(Photos.shift());
  element_slider2.setAttribute("src", Photos[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_slider3 = document.getElementById('slider');
  Photos.unshift(Photos.pop());
  element_slider3.setAttribute("src", Photos.slice(-1)[0]);

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('enter').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);
  new_li.style.backgroundColor = '#000000';
  new_li.style.color = '#33ff33';

  element_list.appendChild(new_li);

});
