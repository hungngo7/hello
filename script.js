function login()
{
  let u = username.value
  let p = pw.value
  if (u=="xuanhung" && p=="123")
  {
   window.open(Home.html)
   document.getElementById(compiler).style.display="block"
  }
  else
    document.write("Sai rồi con")
}
