// Converts markdown link tags [url](display) into html link tags <a href="url">display</a>
const LinkConverter = (element) => {
    var links = element.props.children.split(/(\[[A-z:/\.]+\]\(?[\w]*\)?)/g);
    var isLink = false;
    var linkElements = [];
    var i = 0;
    for (var link of links) {
        if (link && link.length > 0) {
            if (isLink) {
                console.log(link);
                var url = link.match(/\[([A-z:/\.]+)\]/)[1];
                var display = link.match(/\((\w+)\)/)[1];
                linkElements.push(<a key={i} href={url}>{display?display:url}</a>);
            } else {
                linkElements.push(<p style={{display: "inline"}} key={i}>{link}</p>);
            }
        }
      isLink = !isLink;
      i++;
    }
    return <div className={element.props.className}>{linkElements}</div>
  }

export default LinkConverter;