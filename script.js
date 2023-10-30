 document.querySelector('.showlist').addEventListener('click', function(event) {event.preventDefault()});
function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display='flex'
   
}
document.querySelector('.close').addEventListener('click', function(event) {event.preventDefault()});
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display='none';

}