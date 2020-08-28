import $ from 'jquery' //vai procurar dentro de node modules
const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) { //tag wm-include
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)

            }
        })
    })
}
loadIncludes()