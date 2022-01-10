let userName = prompt("Nhập tên tài khoản:", '');

if (userName == 'Admin') {

  let pass = prompt('Nhập mật khẩu:', '');

  if (pass == 'cafedev') {
    alert( 'Chào mừng!' );
  } 
  else if (pass == '' || pass == null) {
    alert( 'Đã hủy' );
  } 
  else {
    alert( 'Mật khẩu sai' );
  }

} 
else if (userName == '' || userName == null) {
  alert( 'Đã hủy' );
} 
else {
  alert( "Tôi không biết bạn" );
}