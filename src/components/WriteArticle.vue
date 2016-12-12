<template>
  <div class="outer-container">
    <div class="note-editor">
      <div class="wrapper-head">
        <div class="note-head">
          <input type="text" class="top-title" value="无标题文档" data-type="title">
        </div>
      </div>
      <div class="wrapper-body">
        <div class="note-detail">

        </div>
      </div>

    </div>
  </div>


</template>

<script>
    export default {
        mounted () {
            this.$store.dispatch('changeArticleFlag', false)
        }
    }
</script>

<style>
  .outer-container {
    height: calc(100% - 4px);
    width:  100%;
    background-color: #fff;
  }

  .note-editor {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
  }

  .note-editor textarea {
    border: 0;
    border-radius: 0;
  }

  .wrapper-head {
    padding: 0 20px;
    border-bottom: 1px solid #e0e1e5;
    display: -webkit-flex;
  }

  .note-head {
    width: 100%;
  }

  input.top-title {
    padding: 24px 0;
  }

  .top-title {
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: 0 none;
    font-size: 18px;
    color: #393939;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }

  input, textarea {
    border: 1px solid #e0e1e5;
    border-radius: 2px;
    line-height: 22px;
    padding: 5px 10px;
  }

  input, textarea {
    webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
    -ms-transition: border linear 0.2s, box-shadow linear 0.2s;
    -o-transition: border linear 0.2s, box-shadow linear 0.2s;
    transition: border linear 0.2s, box-shadow linear 0.2s;
  }

  input, textarea {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }

  .wrapper-body {
    height: 90%;
    padding: 20px;
  }

  .note-detail {
    height: 100%;
  }
</style>
