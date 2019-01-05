$(document).ready(function () {
    // 刪除的 Modal 事件
  $('#removeModal').on('show.bs.modal', function (event) {
    
    var btn = $(event.relatedTarget);

    // 把按鈕的 data 取出來
    var title = btn.data('title');
    
    // 將取出的 data 寫到 modal 標題
    var modal = $(this);
    modal.find('.modal-title').text(title);
  })
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


