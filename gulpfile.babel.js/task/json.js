//* Configuration
import filePath from 'path';
import path from "../config/path.js";
//* Processing - Json
export default () => {
	return $.gulp.src(path.json.src)
		.pipe($.merge({
			fileName: path.json.fileName,
			edit: (json, file) => {
				// Extract the filename and strip the extension 
				let filename = filePath.basename(file.path),
					primaryKey = filename.replace(filePath.extname(filename), '');
				// Set the filename as the primary key for our JSON data
				let data = {};
				data[primaryKey.toLowerCase()] = json;
				return data;
			}
		}))
		.pipe($.gul.debug({ title: '(JSON)' }))
		.pipe($.gulp.dest(path.json.dest));
};