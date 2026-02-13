function capitalFirstChar(s) {
    return s.split(" ").map((text)=>{
      return text[0].toUpperCase()+text.slice(1)
    })
}


 console.log(capitalFirstChar('Yes I am looser').join(' ')) //only first letter uppercase
