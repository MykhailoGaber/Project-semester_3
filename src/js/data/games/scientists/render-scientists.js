export const renderScientists = (scientists, container) => {
  const scientistsMarkup = `<ul class="scientists_list">${scientists
    .map(
      scientist => `
            <li class="scientists__item">
              <div class="scientists__info">
                <p class="scientists__name">
                  ${scientist.firstName} ${scientist.lastName}
                </p>

                <p class="scientists__years">
                  ${scientist.born} - ${scientist.dead}
                </p>
              </div>
            </li>
        `
    )
    .join('')}</ul>`;
  if (container) {
    container.innerHTML = scientistsMarkup;
  }
};
