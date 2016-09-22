 function saveStorage(id)
{
   var data = document.getElementById(id).value;
   var time = new Date().getTime();
   localStorage.setItem(time,data);
   alert("数据已保存");

}

function loadStorage(id)
{


}

function clearStorage(id)
{


}
