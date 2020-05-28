YUI.add("moodle-atto_brightcove-button",function(e,t){var n="atto_brightcove",r='<div {{#brightcove_res_width}}style="max-width: {{../brightcove_res_width}}" {{/brightcove_res_width}} ><video-js id="my_player_{{video_id}}"    data-video-id="{{video_id}}"    data-account="{{account_id}}"    data-player="{{player_id}}"    data-embed="default"    data-application-id    class="vjs-big-play-centered"    {{#brightcove_width}}width="{{../brightcove_width}}" {{/brightcove_width}}    {{#brightcove_height}}height="{{../brightcove_height}}" {{/brightcove_height}}    controls></video-js></div>',i='<form class="mform atto_form atto_brightcove" id="atto_brightcove_form"><label for="brightcove_accountid_entry">Enter Account Id</label><input class="form-control fullwidth " type="text" id="brightcove_accountid_entry"size="32" required="true"/><label for="brightcove_videoid_entry">Enter Video Id</label><input class="form-control fullwidth " type="text" id="brightcove_videoid_entry"size="32" required="true"/><label for="brightcove_playerid_entry">Enter Player Id</label><input class="form-control fullwidth " type="text" id="brightcove_playerid_entry"size="32" required="true"/><div class="mb-1"><label for="brightcove_sizing" class="full-width-labels">Sizing</label><br><div class="form-check form-check-inline">  <input class="form-check-input" type="radio" name="brightcove_sizing" id="inlineRadio1" value="res" checked>  <label class="form-check-label" for="inlineRadio1">Responsive</label></div><div class="form-check form-check-inline">  <input class="form-check-input" type="radio" name="brightcove_sizing" id="inlineRadio2" value="fix">  <label class="form-check-label" for="inlineRadio2">Fixed</label></div></div><div class="mb-1" >    <label>Size</label>    <div class="form-inline " >        <label class="accesshide">Video width</label>        <input type="text" class="form-control mr-1  input-mini" size="4" id="brightcove_width" value="960"> x        <label class="accesshide">Video height</label>        <input type="text" class="form-control ml-1 input-mini" size="4" id="brightcove_height" value="540">        <label class="accesshide">Unit</label>        <select class="form-control ml-1 input-mini"  id="brightcove_width_unit">            <option value="px" selected>px</option>            <option value="cm" >cm</option>            <option value="%" >%</option>        </select>    </div></div><div class="clearfix"></div><div class="mdl-align"><br><button class="btn btn-secondary submit" type="submit">Insert Brightcove Video</button></div></form>';e.namespace("M.atto_brightcove").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"brightcove",iconComponent:n,callback:this._handleWordFileUpload,callbackArgs:"brightcove"})},_handleWordFileUpload:function(){var e=this.getDialogue({headerContent:M.util.get_string("pluginname",n),focusAfterHide:!0,width:660});e.set("bodyContent",this._getDialogueContent(this.get("host").getSelection())).show(),M.form.shortforms({formid:"atto_brightcove_form"})},_getDialogueContent:function(t){var n=e.Node.create(e.Handlebars.compile(i)());return this._attachEvents(n,t)},_attachEvents:function(e,t){return e.one(".submit").on("click",function(e){e.preventDefault();var n=this._getMediaHTMLBrightcove(e.currentTarget.ancestor(".atto_form")),r=this.get("host");this.getDialogue({focusAfterHide:null}).hide();if(n){r.setSelection(t),r.insertContentAtFocusPoint(n);var i=new Event("brightcoveinsertedtodom");document.dispatchEvent(i),this.markUpdated()}},this),e},_getMediaHTMLBrightcove:function(t){var n=t.one("#brightcove_width_unit").get("value")||"px",i=t.one("#brightcove_width").get("value")+n,s=t.one("#brightcove_height").get("value")+n,o=document.querySelector('input[name="brightcove_sizing"]:checked').value,u={account_id:t.one("#brightcove_accountid_entry").get("value"),video_id:t.one("#brightcove_videoid_entry").get("value"),player_id:t.one("#brightcove_playerid_entry").get("value")};return o==="res"?u.brightcove_res_width=i:(u.brightcove_width=i,u.brightcove_height=s),u.video_id?e.Handlebars.compile(r)(u):""}},{ATTRS:{disabled:{value:!0},area:{value:{}}}})},"@VERSION@");
