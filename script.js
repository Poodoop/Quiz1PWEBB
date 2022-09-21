function submit(){
    var name = document.getElementById('name').value; 
    var tempat = document.getElementById('tempat').value; 
    var tanggal = document.getElementById('tanggal').value; 
    var utusan = document.getElementById('utusan').value; 
    var kelurahan = document.getElementById('kelurahan').value; 
    var kecamatan = document.getElementById('kecamatan').value; 
    var notel = document.getElementById('notel').value; 


  if (name==''||tempat==''||tanggal==''||utusan==''||kelurahan==''||kecamatan==''||notel=='') {
    alert("Form Belum Lengkap!");
    return;
  }

    window.location = "submitted.html";
  }

  function back(){
    window.location = "index.html";
  }