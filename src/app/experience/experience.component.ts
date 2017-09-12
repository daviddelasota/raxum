import { Component,ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
selector:'client',
styleUrls:['./experience.style.css','animate.min.css'],
templateUrl:'./experience.view.html'
})
export class ExperienceComponent implements OnInit   {
  
ngOnInit(){
$( "#div_admin-form9" ).ready(function() {
       $('#div_admin-form9').addClass('animated bounce');
});


 jQuery(document).ready(function () {
     "use strict";
  $("#datepicker4").mask("99/99/9999");
   $('#datepicker4').datepicker({
       numberOfMonths: 1,
       changeYear: true,
       dateFormat: "dd-mm-yy",
       yearRange: "1970:Y",
       showOn: 'both',
       monthNames: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
       dayNamesMin:[ "Do","Lu","Ma","Mi","Ju","Vi","Sa" ],
       buttonText: '<i class="fa fa-calendar-o"></i>',
       prevText: '<i class="fa fa-chevron-left"></i>',
       nextText: '<i class="fa fa-chevron-right"></i>',
       beforeShow: function (input, inst) {
         var newclass = 'admin-form';
         var themeClass = $(this).parents('.admin-form').attr('class');
         var smartpikr = inst.dpDiv.parent();
         if (!smartpikr.hasClass(themeClass)) {
           inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
         }
       }
     });
    
     /* @date picker
      ------------------------------------------------------------------ */
   $('#datepicker5').datepicker({
       numberOfMonths: 1,
       changeYear: true,
       dateFormat: "dd-mm-yy",
       yearRange: "1970:Y",
       showOn: 'both',
       monthNames: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
       dayNamesMin:[ "Do","Lu","Ma","Mi","Ju","Vi","Sa" ],
       buttonText: '<i class="fa fa-calendar-o"></i>',
       prevText: '<i class="fa fa-chevron-left"></i>',
       nextText: '<i class="fa fa-chevron-right"></i>',
       beforeShow: function (input, inst) {
         var newclass = 'admin-form';
         var themeClass = $(this).parents('.admin-form').attr('class');
         var smartpikr = inst.dpDiv.parent();
         if (!smartpikr.hasClass(themeClass)) {
           inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
         }
       }
     });
     
     /* @ui slider
      ------------------------------------------------------------------ */
     $("#slider1").slider({
       range: "min",
       min: 0,
       max: 100,
       value: 30,
       slide: function (event, ui) {
         $(".slider-countbox").val("$" + ui.value);
       }
     });
     $("#slider2").slider({
       range: true,
       values: [27, 63]
     });
     $("#slider3").slider({
       range: true,
       values: [7, 53]
     });
     $("#slider4").slider({
       range: true,
       values: [57, 93]
     });
     $("#slider5").slider({
       range: true,
       values: [37, 63]
     });
     // Demo Code - Form Switcher
     $('#form-switcher > button').on('click', function () {
       var btnData = $(this).data('form-layout');
       var btnActive = $('#form-elements-pane .admin-form.active');
       // Remove any existing animations and then fade current form out
       btnActive.removeClass('slideInUp').addClass('animated fadeOutRight animated-shorter');
       // When above exit animation ends remove leftover classes and animate the new form in
       btnActive.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
         btnActive.removeClass('active fadeOutRight animated-shorter');
         $('#' + btnData).addClass('active animated slideInUp animated-shorter')
       });
     });
     // Cache several DOM elements
     var pageHeader = $('.content-header').find('b');
     var adminForm = $('.admin-form');
     var options = adminForm.find('.option');
     var switches = adminForm.find('.switch');
     var buttons = adminForm.find('.button');
     var Panel = adminForm.find('.panel');
     // Form Skin Switcher
     $('#skin-switcher a').on('click', function () {
       var btnData = $(this).data('form-skin');
       $('#skin-switcher a').removeClass('item-active');
       $(this).addClass('item-active')
       adminForm.each(function (i, e) {
         var skins = 'theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark'
         var panelSkins = 'panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark'
         $(e).removeClass(skins).addClass('theme-' + btnData);
         Panel.removeClass(panelSkins).addClass('panel-' + btnData);
         pageHeader.removeClass().addClass('text-' + btnData);
       });
       $(options).each(function (i, e) {
         if ($(e).hasClass('block')) {
           $(e).removeClass().addClass('block mt15 option option-' + btnData);
         } else {
           $(e).removeClass().addClass('option option-' + btnData);
         }
       });
       // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
       $('body').find('.ui-slider').each(function (i, e) {
         $(e).addClass('slider-primary');
       });
       $(switches).each(function (i, ele) {
         if ($(ele).hasClass('switch-round')) {
           if ($(ele).hasClass('block')) {
             $(ele).removeClass().addClass('block mt15 switch switch-round switch-' + btnData);
           } else {
             $(ele).removeClass().addClass('switch switch-round switch-' + btnData);
           }
         } else {
           if ($(ele).hasClass('block')) {
             $(ele).removeClass().addClass('block mt15 switch switch-' + btnData);
           } else {
             $(ele).removeClass().addClass('switch switch-' + btnData);
           }
         }
       });
       buttons.removeClass().addClass('button btn-' + btnData);
     });
     setTimeout(function () {
       adminForm.addClass('theme-primary');
       Panel.addClass('panel-primary');
       pageHeader.addClass('text-primary');
       $(options).each(function (i, e) {
         if ($(e).hasClass('block')) {
           $(e).removeClass().addClass('block mt15 option option-primary');
         } else {
           $(e).removeClass().addClass('option option-primary');
         }
       });
       // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
       $('body').find('.ui-slider').each(function (i, e) {
         $(e).addClass('slider-primary');
       });
       $(switches).each(function (i, ele) {
         if ($(ele).hasClass('switch-round')) {
           if ($(ele).hasClass('block')) {
             $(ele).removeClass().addClass('block mt15 switch switch-round switch-primary');
           } else {
             $(ele).removeClass().addClass('switch switch-round switch-primary');
           }
         } else {
           if ($(ele).hasClass('block')) {
             $(ele).removeClass().addClass('block mt15 switch switch-primary');
           } else {
             $(ele).removeClass().addClass('switch switch-primary');
           }
         }
   
       });
       buttons.removeClass().addClass('button btn-primary');
     }, 800);
   });
   $("#admin-form").validate({
     /* @validation states + elements
      ------------------------------------------- */
     errorClass: "state-error",
     validClass: "state-success",
     errorElement: "em",
     /* @validation rules
      ------------------------------------------ */
     rules: {
       company: {
         required: true,
         maxlength: 18,
         minlength: 3
       },
       datepicker4: {
         required: true,
         dateITA : true,
       },
       datepicker5: {
         required: true,
         date: true,
         dateITA : true,
       }
     },
     /* @validation error messages
      ---------------------------------------------- */
     messages: {
       company: {
         required: 'Nombre de empresa| requerido',
         maxlength: 'El nombre de la empresa debe ser menor en longitud',
         minlength: 'El nombre de la empresa debe ser mayor en longitud'
       },
       datepicker4:{
         required: 'Fecha requerida'
       },
       datepicker5:{
         required: 'Fecha requerida'
       }
     },
     /* @validation highlighting + error placement
      ---------------------------------------------------- */
     highlight: function (element, errorClass, validClass) {
       $(element).closest('.field').addClass(errorClass).removeClass(validClass);
     },
     unhighlight: function (element, errorClass, validClass) {
       $(element).closest('.field').removeClass(errorClass).addClass(validClass);
     },
     errorPlacement: function (error, element) {
       if (element.is(":radio") || element.is(":checkbox")) {
         element.closest('.option-group').after(error);
       } else {
         error.insertAfter(element.parent());
       }
     },
      submitHandler: function(form) {
          alert("hola y adios");
          $("#job").attr("value","OTRO TEXTO");
          form.submit();
     }   
     
 });
}

constructor(){
 console.log("experience");
}
public mostrarTitulo(){
    console.log("click");
    // Usamos jQuery con normalidad
    $("#prueba").hide();
  }

}
