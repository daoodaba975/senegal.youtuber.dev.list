const ITEMS_PER_PAGE = 6;

export class Pagination {
  constructor(items, container, createItemElement) {
    this.items = items;
    this.container = container;
    this.createItemElement = createItemElement;
    this.currentPage = 1;
    this.totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    this.init();
  }

  init() {
    this.renderItems();
    this.renderPagination();
  }

  renderItems() {
    this.container.innerHTML = "";
    const gridContainer = document.createElement("div");
    gridContainer.className =
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8";

    const start = (this.currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = this.items.slice(start, end);

    pageItems.forEach((item) => {
      const element = this.createItemElement(item);
      gridContainer.appendChild(element);
    });

    this.container.appendChild(gridContainer);
  }

  renderPagination() {
    if (this.totalPages <= 1) return;

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "flex justify-center space-x-2";

    const prevButton = this.createPaginationButton(
      "Previous",
      () => {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.init();
        }
      },
      this.currentPage === 1
    );

    const nextButton = this.createPaginationButton(
      "Next",
      () => {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.init();
        }
      },
      this.currentPage === this.totalPages
    );

    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= this.totalPages; i++) {
      const pageButton = this.createPageNumberButton(i);
      paginationContainer.appendChild(pageButton);
    }

    paginationContainer.appendChild(nextButton);
    this.container.appendChild(paginationContainer);
  }

  createPaginationButton(text, onClick, disabled) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = `px-4 py-2 rounded-lg ${
      disabled
        ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700"
        : "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
    } transition-colors duration-200`;
    button.disabled = disabled;
    button.addEventListener("click", onClick);
    return button;
  }

  createPageNumberButton(pageNumber) {
    const button = document.createElement("button");
    button.textContent = pageNumber;
    button.className = `px-4 py-2 rounded-lg ${
      this.currentPage === pageNumber
        ? "bg-green-500 text-white dark:bg-green-600"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
    } transition-colors duration-200`;
    button.addEventListener("click", () => {
      this.currentPage = pageNumber;
      this.init();
    });
    return button;
  }
}
