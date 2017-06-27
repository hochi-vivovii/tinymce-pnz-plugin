tinymce.PluginManager.add('imagepnz', function(editor) {

    var loading_wheel = "data:image/gif;base64,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";


    function showDialog(){
        var win, data = {}, dom = editor.dom, file;
        function onSubmitForm() {
            if (!file)
                return;
            editor.focus();
            editor.notificationManager.open({
                text: 'Uploading image....',
                type: 'warning'
            });

            var data = win.toJSON();

            var wrapper = constructElement(loading_wheel, data);
            var id = "__new_image" + Math.floor((Math.random() * 10000) + 1);
            dom.setAttrib(wrapper, 'id', id);
            // editor.selection.setNode(wrapper);
            editor.execCommand('mceInsertRawHTML', true, wrapper.outerHTML);

            editor.settings.customImageUpload(file, data.pinchAndZoom).then(function(url){
                editor.selection.select(dom.get(id));
                editor.execCommand('mceInsertRawHTML', true, constructElement(url, data).outerHTML);
                editor.notificationManager.open({
                    text: 'Upload Finished',
                    type: 'warning'
                });

            });
        }
        function constructElement(url, data){
            var wrapper = dom.create('div', {class: 'image'});
            var image = dom.create('img', {src: url});

            if (data.pinchAndZoom === true) {
                dom.addClass(image, "pinch-n-zoom");
                dom.addClass(wrapper, "pinch-n-zoom-wrapper");
                dom.addClass(wrapper, "mceNonEditable");
            }
            dom.add(wrapper, image);
            return wrapper;
        }
        function fileSelected(e) {
            if (e.meta.file.size > (editor.settings.customImageUploadSizeLimit)) {
                win.find('notification')[0].innerHtml('File size must less than 200KB.');
                win.find('notification')[0].show();
                return;
            }
            if (e.meta.file.type != 'image/jpeg' && e.meta.file.type != 'image/png') {
                win.find('notification')[0].innerHtml('File type must be either jpeg or png');
                win.find('notification')[0].show();
                return;
            }
            win.find('notification')[0].hide();
            file = e.meta.file;
        }

        // General settings shared between simple and advanced dialogs
        var generalFormItems = [
             {
                 name: 'file',
                 type: 'filepicker',
                 filetype: 'image',
                 label: 'Source',
                 onchange: fileSelected,
                 autofocus: true
             },
             {
                 name: 'notification',
                 hidden: true,
                 type: 'notification'
             },
             {
                 name: 'pinchAndZoom',
                 type: 'checkbox',
                 label: 'Pinch-and-Zoomable'
             }
        ];

        // Simple default dialog
        win = editor.windowManager.open({
            title: 'Insert image',
            data: data,
            body: generalFormItems,
            onSubmit: onSubmitForm
        });
     }
     editor.addButton('imagepnz', {
         icon: 'image',
         tooltip: 'Insert image',
         onclick: showDialog,
         stateSelector: 'img:not([data-mce-object],[data-mce-placeholder])'
     });
});
