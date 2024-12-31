export function createChannelElement(channel) {
  const link = document.createElement("a");
  link.href = channel.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className =
    "channel-link animate-fade-in opacity-0 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white";

  const icon = document.createElement("i");
  icon.className = "fab fa-youtube text-red-500 text-xl";

  const name = document.createElement("span");
  name.textContent = channel.name;
  name.className = "font-medium";

  link.appendChild(icon);
  link.appendChild(name);

  return link;
}
