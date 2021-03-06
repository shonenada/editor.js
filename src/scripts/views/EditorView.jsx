import Vue from 'vue';
import marked from 'marked';
import API from 'scripts/services/APIService';
import template from 'templates/editor.html';

const EditorView = Vue.extend({
  template: template,
  filters: {
    marked: marked,
  },
  data: function() {
    return {
      API: API,
      content: '',
    };
  },
  created: function () {
  },
  ready: function() {
  },
  methods: {
    info: function() {
      API.getAccountInfo(function(resp) {
        console.log(resp);
      });
    },
    listFiles: function() {
      API.listFiles(function(resp) {
        console.log(resp);
      });
    },
    loadFile: function() {
      API.loadFile((resp) => {
        this.content = resp.data;
        console.log(resp);
      });
    },
    upload: function() {
      API.uploadFile(this.content, function(resp) {
        console.log(resp);
      });
    },
  },
});

export default EditorView;
