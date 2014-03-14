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
            if (node.nodeName != 'TEXTAREA')
                child = node.firstChild;
            else
                child = null;
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
	v = v.replace(/\bbitcoin\b/g, "buttcoin");
	v = v.replace(/\bBitcoin\b/g, "Buttcoin");
	v = v.replace(/\bBitCoin\b/g, "ButtCoin");
	v = v.replace(/\bbitcoins\b/g, "buttcoins");
	v = v.replace(/\bBitcoins\b/g, "Buttcoins");
	v = v.replace(/\bBitCoins\b/g, "ButtCoins");
    v = v.replace(/\bdogecoin\b/g, "dogebutt");
    v = v.replace(/\bDogecoin\b/g, "Dogebutt");
    v = v.replace(/\bDogeCoin\b/g, "DogeButt");
    v = v.replace(/\bdogecoins\b/g, "dogebutts");
    v = v.replace(/\bDogecoins\b/g, "Dogebutts");
    v = v.replace(/\bDogeCoins\b/g, "DogeButts");
	
	textNode.nodeValue = v;
}


