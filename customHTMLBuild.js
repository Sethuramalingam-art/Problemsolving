<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width:content-width;intial-scale:1.0">
</head>
<body>
<div id="parentContainer">

</div>

<script>
  function setData() {
  const vDom = {
  id: "form",
  tag: "form",
  children: [
    {
      tag: "h2",
      text: "My form",
      id: "my-form",
    },
    {
      tag: "label",
      text: "First name: ",
    },
    {
      tag: "input",
      type: "text",
      id: "firstName",
    },
    {
      tag: "label",
      text: "Last name: ",
    },
    {
      tag: "input",
      type: "text",
      id: "lastName",
    },
    {
      tag: "label",
      text: "male",
      children: [
        {
          tag: "input",
          type: "radio",
          id: "gender-male",
        },
      ],
    },
    {
      tag: "label",
      text: "female",
      children: [
        {
          tag: "input",
          type: "radio",
          id: "gender-female",
        },
      ],
    },
  ],
};
    var getParentContainer = document.getElementById('parentContainer');
  console.log(getParentContainer)
  var createForm = document.createElement(vDom.tag);

 

  

  vDom.children.map((child)=> {
    var typeOfElememt = document.createElement(child.tag);        var setElement = setCommonElement(typeOfElememt, child);
    createForm.appendChild(setElement)     
    })
  }

  function setCommonElement(parentElement, child) {
  //['tag','text','id']

 

    Object.keys(child).forEach((key)=> {
    if (key === 'tag') {
               return
    } else {
       parentElement.setAttribute(key ,child[key]);
    }

    })

    if (child.children) {
        for (var i=0;i<child.children.length;i++) {
      if (typeof child.children[i] == 'object') {
                parentElement.appentChild = setCommonElement(parentElement,child.children[i]);
      }

 

      }

    }
    console.log(parentElement);
    return parentElement
  }

  setData();
</script>
</body>
</html>
