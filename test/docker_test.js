var grunt = require("grunt");
var rr =require("rimraf");

exports.docker = {
  main: function(test) {
     var expectSimple = "test";

     var html = grunt.file.read("docs/fixtures/docker/docker.js.html");
     var css = grunt.file.read("docs/doc-style.css");
     var fileList = grunt.file.read("docs/doc-filelist.js");
     var fileScript = grunt.file.read("docs/doc-script.js");

     test.expect(4);
     test.equal(css.length, 10859, "Should create CSS.");
     test.equal(html.length, 1914, "Should create HTML.");
     test.equal(fileList.length, 75, "Should create doc-filelist.js");
     test.equal(fileScript.length, 7461, "Should create doc-script.js");
     test.done();

     rr('docs', function(){});
  }
};