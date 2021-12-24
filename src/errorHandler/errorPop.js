import Swal from 'sweetalert2'
export const errorHandler = (msg)=>{
    Swal.fire({
    title: 'Error!',
    text: msg,
    icon: 'error',
    confirmButtonText: 'Cool',
    timer:1000,
    timerProgressBar:true
  })}