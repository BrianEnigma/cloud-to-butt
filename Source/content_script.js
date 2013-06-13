ID_IGNORE_LIST = [
    // Don't traverse into the input and textarea fields of the Trac issue 
    // tracking system.  Unintentional, unexpected, and hilarious results
    // arise from this script editing those fields when editing a ticket.
    'comment',
    'field-summary',
    'field-description'
];

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
            if (null != node.getAttribute('id'))
            {
                if (ID_IGNORE_LIST.indexOf(node.getAttribute('id')) != -1)
                    break;
            }
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	textNode.nodeValue = v;
}


