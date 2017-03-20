var xmlHttp;

function showTable() {
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return
    }
    var url="getTable.php";
    var postStr="database=game";
    xmlHttp.onreadystatechange=function stateChanged()
    {
        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
        {
            document.getElementById("tables").innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("POST",url,true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(postStr);
}
function showTableMsg(str)
{
    if (str.length==0)
    {
        document.getElementById("txtHint").innerHTML="";
        return
    }
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return
    }
    var url="getTableMsg.php";
    var postStr="table=" + str;
    xmlHttp.onreadystatechange=function stateChanged()
    {
        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
        {
            document.getElementById("txtHint").innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("POST",url,true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(postStr);
}

function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}/**
 * Created by zhuyst on 2017/2/7.
 */
