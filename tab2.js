(function(w,$){
  // constructor
  var Tab = function(param){

    // jQuery object
    this.$root = $(param.root);
    this.$item = this.$root.find(param.item);
    this.$body = this.$root.find(param.body);

    // class
    this.adClass = 'current';

    // current tab index
    this.currentIndex = 0;

    // 初期化
    this.init();

    // evnet
    var self = this; // alias
    this.$item.on("click", "a", function(){
      self.setCurrent(this);
      self.change();
      return false;
    });
  };

  Tab.prototype.setCurrent = function(ele){
    this.currentIndex = 0;
    if (ele){
      var index = $(ele).parent().index();
      this.currentIndex = index;
    }
  };

  Tab.prototype.init = function(){
    this.setCurrent();
    this.change();
  };

  Tab.prototype.change = function(){
    this.changeTab();
    this.changeBody();
  };

  Tab.prototype.changeTab = function(){
    this.$item
      .removeClass(this.adClass)
    .eq(this.currentIndex)
      .addClass(this.adClass);
  };

  Tab.prototype.changeBody = function(){
    this.$body
      .removeClass(this.adClass)
      .hide()
    .eq(this.currentIndex)
      .addClass(this.adClass)
      .show();
  };

  $(function() {
    // タブオブジェクトを生成
    var tab1 = new Tab({
      root: ".tab",
      item: ".tabHead li",
      body: ".tabBody li"
    });

  });
}(window, jQuery));

