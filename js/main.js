let idx = 0,
    o = 3,
    set_color = 'green'

let colorpicker_template =  `
    <div class="colorpicker">
        <button :class="colorpicker--btn colorpicker--btn-${ idx } colorpicker--btn-set${ set_color }" onclick="showColorPicker()">${ set_color }</button>
        <div class="colorpicker--menu" v-if="colorpicker_visible">
            <div v-for="o in options" class="colorpicker--pick">
                <span :class="colorpicker--pick-${ o }" onclick="pickColor(o)">${ o }</span>
            </div>
        </div>
    </div>
`

const showContent = function() {
    document.getElementById("test").style.display = 'block'
    
    document.body.appendChild(colorpicker_template);
  
}