class Dropdown {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.render();
  }
  setDropdown = () => {
    const optionList = [];
    let template = `
    <select id="cntPerPage">
      {{__option_value__}}
    </select>
    `;

    this.options.map((item) =>
      optionList.push(`
      <option value=${item}>
        ${item}개씩
      </option>
      `)
    );
    template = template.replace("{{__option_value__}}", optionList.join(""));
    return template;
  };
  render() {
    const dropdownContainer = document.querySelector("#dropdown");
    const dropdownData = this.setDropdown();
    dropdownContainer.innerHTML = dropdownData;
  }
}

export default Dropdown;
