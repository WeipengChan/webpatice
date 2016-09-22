 function saveStorage(id)
{
   var data = document.getElementById(id).value;
   var time = new Date().getTime();
   localStorage.setItem(time,data);
   alert("数据已保存");
   loadStorage("msg");
}

function loadStorage(id)
{
    var result = "<table border='1'>";
    for(var i = 0; i<localStorage.length;i++)
    {
       var key = localStorage.key(i);
       var value = localStorage.getItem(key);
       console.log("key:"+key);
       console.log("value:"+value);
       result+= "<tr><td>"+key+"</td><td>"+value+"</td><td>"+"</td></tr>"
    }
    result += '</table>';
    var msgElement = document.getElementById(id);
    msgElement.innerHTML = result;
}

function clearStorage(id)
{
    localStorage.clear();
    loadStorage('msg');

}
