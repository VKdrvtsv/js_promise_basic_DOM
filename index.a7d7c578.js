var e=document.querySelector(".logo"),t=new Promise(function(t){e.addEventListener("click",function(){t()})}),n=new Promise(function(e,t){setTimeout(function(e){t(e)},3e3)});t.then(function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.append(e)}),n.catch(function(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected!",document.body.append(e)});//# sourceMappingURL=index.a7d7c578.js.map

//# sourceMappingURL=index.a7d7c578.js.map
