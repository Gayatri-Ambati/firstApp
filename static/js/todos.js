  $("#btnUpdatePut").click((evt) => {
    const form = evt.target.form;
    console.log(form.action);
    $.ajax({
      url: form.action,
      type: "PUT",
      data: $(form).serialize(),
      success: (data, textStatus, xhr) => {
        document.write('Vehicle successfully updated.');
      },
      error: (xhr, textStatus, errorThrown) => {
        document.write(xhr.responseText);
      }
    });
  });
  
  $("#btndelete").click((evt) => {
    evt.preventDefault();
    var id= $("#del").value;
    $.ajax({
      url: "vehicles/"+id,
      type: "DELETE",
      success: (data, textStatus, xhr) => {
        document.write('Vehicle successfully deleted.');
      },
      error: (xhr, textStatus, errorThrown) => {
        document.write(xhr.responseText);
      }
    });
  });


