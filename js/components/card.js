export function createChannelCard(channel) {
  const card = document.createElement("div");
  card.className =
    "bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden";
  card.setAttribute("data-channel-name", channel.name.toLowerCase());

  const thumbnail = document.createElement("div");
  thumbnail.className =
    "h-32 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center";

  const icon = document.createElement("i");
  icon.className = "fab fa-youtube text-white text-4xl";
  thumbnail.appendChild(icon);

  const content = document.createElement("div");
  content.className = "p-4";

  const title = document.createElement("h3");
  title.className = "font-semibold text-lg mb-2 text-gray-800 dark:text-white";
  title.textContent = channel.name;

  const link = document.createElement("a");
  link.href = channel.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className =
    "inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors duration-200";

  const linkText = document.createElement("span");
  linkText.textContent = "See the channel";

  const linkIcon = document.createElement("i");
  linkIcon.className = "fas fa-external-link-alt text-sm ml-2";

  link.appendChild(linkText);
  link.appendChild(linkIcon);

  content.appendChild(title);
  content.appendChild(link);

  card.appendChild(thumbnail);
  card.appendChild(content);

  return card;
}
