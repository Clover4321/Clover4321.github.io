/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_card}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'card'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Image3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_words3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(4000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_char}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(4000);
         

      });
      //Edge binding end

   })("card");
   //Edge symbol end:'card'

   //=========================================================
   
   //Edge symbol: 'first'
   (function(symbolName) {   
   
   })("first");
   //Edge symbol end:'first'

   //=========================================================
   
   //Edge symbol: 'second'
   (function(symbolName) {   
   
   })("second");
   //Edge symbol end:'second'

   //=========================================================
   
   //Edge symbol: 'third'
   (function(symbolName) {   
   
   })("third");
   //Edge symbol end:'third'

})(jQuery, AdobeEdge, "EDGE-101902818");