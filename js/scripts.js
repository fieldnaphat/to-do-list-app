function newItem() {

  //Create new list in home page
  let li = $("<li></li>");
  let inputVal = $("input[name=ListItem]").val();
  li.append(inputVal);

  if (inputVal === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // Make the input empty when user click input
  $("input[name=ListItem]").focus(function () {
    $(this).val("");
  });

  function finishedList() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function finishedList() {
    li.toggleClass("strike");
  });

  //Adding a delete button
  let DeleteListBtn = $("<DeleteListBtn></DeleteListBtn>");
  DeleteListBtn.append(document.createTextNode("X"));
  li.append(DeleteListBtn);

  //Make list can delete
  DeleteListBtn.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
    // li.fadeIn("slow");

  }

  //Make list can re-order by drag mouse
  $("#list").sortable();
}

