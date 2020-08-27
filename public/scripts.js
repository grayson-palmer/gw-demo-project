let questionCount = 0;

$('#copyright-year').text(new Date().getFullYear());

let removeQuestion = (num) => {
  $(`.question-${num}`).remove();
}

$('#add-question').click(() => {
  if (questionCount < 3) {
    $('#form-question-container').append(`
    <div class="row question-${questionCount}">
      <div class="form-group col-md-4">
        <label for="feature-select-${questionCount}">Feature:</label>
        <select class="custom-select" name="feature" id="feature-select-${questionCount}">
          <option selected>Select a Feature</option>
          <option value="frame-styles">Frame Styles</option>
          <option value="structural-framing">Structural Framing</option>
          <option value="roof-systems">Roof Systems</option>
          <option value="wall-panels">Wall Panels</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label for="feature-question-${questionCount}">Question:</label>
        <input class="form-control" type="text" id="feature-question-${questionCount}">
      </div>
      <div class="form-group col-md-2 d-flex align-items-end">
        <button class="remove-question-button form-control" type="button" id="remove-question-${questionCount}" onclick="removeQuestion(${questionCount})">-</button>
      </div>
    </div>
    `);
    questionCount++
  }
});

$('form').submit(() => {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  
  if (!$('#firstname').val()) {
    $('.validate-firstname').text('Please enter your first name.');
  };
  if (!$('#lastname').val()) {
    $('.validate-lastname').text('Please enter your last name.');
  };
  if (!email_regex.test($('#email').val())) {
    $('.validate-email').text('Please enter a valid email address.');
  };
  if (!$('#message').val()) {
    $('.validate-message').text('Please enter a message for us.');
  };

  event.preventDefault();
})