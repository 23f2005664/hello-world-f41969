function showMessage(){
  const el=document.getElementById('result');
  el.textContent='This simple app works! Time: '+new Date().toLocaleString();
}