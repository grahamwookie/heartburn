
function treatment_table_toggle (e) {

  if($(e).hasClass("treatment_table_open")) {
     $(e).removeClass("treatment_table_open");
     e.parentElement.querySelector('.treatment-table__row-content').style.display = 'none';
     e.parentElement.querySelector('img.expand-arrow').src = '/static/beta/images/icon-expand-arrow.svg';
  } else {
     $(e).addClass("treatment_table_open");
     e.parentElement.querySelector('.treatment-table__row-content').style.display = 'block';
     e.parentElement.querySelector('img.expand-arrow').src = '/static/beta/images/icon-close-arrow.svg';
  }
}

function toggle_pain_scale (e) {
    if (e.parentElement.classList.contains("pain_scale_open")) {
        e.parentElement.classList.remove("pain_scale_open");
        e.parentElement.querySelector('.pain-scale-table').style.display = 'none';
    } else {
        e.parentElement.classList.add("pain_scale_open");
        e.parentElement.querySelector('.pain-scale-table').style.display = 'block';
    }

}
