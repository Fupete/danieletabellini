export default {
  gallery: function (content, name) {
    return `<div class="gallery" id="gallery-${name}">
				<ul>
					${content}
				</ul>
			</div>`.replace(/(\r\n|\n|\r)/gm, '');
  }
};
