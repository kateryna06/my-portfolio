'use strict';
var svg_config = {
	shape : {
		id : {
			generator : "icon-%s"
		}
	},
	mode : {
		symbol : {
			prefix : "%s",
			sprite : "sprite.svg",
			render : { scss : true },
			example : true
		}
	}
};
module.exports = function() {
	$.gulp.task('svg.sprite', function() {
		return $.gulp.src('./source/icons/*.svg')
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({
				run: ($) => {
					$('[fill]').removeAttr('fill');
					$('[style]').removeAttr('style');
				},
				parserOptions: {
					xmlMode: true
				}
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.svgSprite(svg_config))
			.pipe($.gulp.dest('./source/template/svg'));
	});
};