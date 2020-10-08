var m=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports);var h=m(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});function q(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}b.toCommandValue=q});var C=m(p=>{"use strict";var D=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(p,"__esModule",{value:!0});const U=D(require("os")),w=h();function S(e,t,n){const s=new I(e,t,n);process.stdout.write(s.toString()+U.EOL)}p.issueCommand=S;function R(e,t=""){S(e,{},t)}p.issue=R;const O="::";class I{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e=O+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=!0;for(const n in this.properties)if(this.properties.hasOwnProperty(n)){const s=this.properties[n];s&&(t?t=!1:e+=",",e+=`${n}=${L(s)}`)}}return e+=`${O}${F(this.message)}`,e}}function F(e){return w.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function L(e){return w.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var j=m(d=>{"use strict";var E=d&&d.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(d,"__esModule",{value:!0});const P=E(require("fs")),H=E(require("os")),B=h();function x(e,t){const n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!P.existsSync(n))throw new Error(`Missing file at path: ${n}`);P.appendFileSync(n,`${B.toCommandValue(t)}${H.EOL}`,{encoding:"utf8"})}d.issueCommand=x});var V=m(i=>{"use strict";var W=i&&i.__awaiter||function(e,t,n,s){function f(a){return a instanceof n?a:new n(function(u){u(a)})}return new(n||(n=Promise))(function(a,u){function v(r){try{c(s.next(r))}catch(l){u(l)}}function _(r){try{c(s.throw(r))}catch(l){u(l)}}function c(r){r.done?a(r.value):f(r.value).then(v,_)}c((s=s.apply(e,t||[])).next())})},T=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(i,"__esModule",{value:!0});const o=C(),$=j(),J=h(),y=T(require("os")),z=T(require("path"));var M;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(M=i.ExitCode||(i.ExitCode={}));function Y(e,t){const n=J.toCommandValue(t);process.env[e]=n;const s=process.env.GITHUB_ENV||"";if(s){const f="_GitHubActionsFileCommandDelimeter_",a=`${e}<<${f}${y.EOL}${n}${y.EOL}${f}`;$.issueCommand("ENV",a)}else o.issueCommand("set-env",{name:e},n)}i.exportVariable=Y;function K(e){o.issueCommand("add-mask",{},e)}i.setSecret=K;function Q(e){const t=process.env.GITHUB_PATH||"";t?$.issueCommand("PATH",e):o.issueCommand("add-path",{},e),process.env.PATH=`${e}${z.delimiter}${process.env.PATH}`}i.addPath=Q;function X(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n)throw new Error(`Input required and not supplied: ${e}`);return n.trim()}i.getInput=X;function Z(e,t){o.issueCommand("set-output",{name:e},t)}i.setOutput=Z;function k(e){o.issue("echo",e?"on":"off")}i.setCommandEcho=k;function ee(e){process.exitCode=M.Failure,A(e)}i.setFailed=ee;function te(){return process.env.RUNNER_DEBUG==="1"}i.isDebug=te;function ne(e){o.issueCommand("debug",{},e)}i.debug=ne;function A(e){o.issue("error",e instanceof Error?e.toString():e)}i.error=A;function ie(e){o.issue("warning",e instanceof Error?e.toString():e)}i.warning=ie;function se(e){process.stdout.write(e+y.EOL)}i.info=se;function G(e){o.issue("group",e)}i.startGroup=G;function N(){o.issue("endgroup")}i.endGroup=N;function re(e,t){return W(this,void 0,void 0,function*(){G(e);let n;try{n=yield t()}finally{N()}return n})}i.group=re;function ae(e,t){o.issueCommand("save-state",{name:e},t)}i.saveState=ae;function oe(e){return process.env[`STATE_${e}`]||""}i.getState=oe});"use strict";var ue=exports&&exports.__createBinding||(Object.create?function(e,t,n,s){s===void 0&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){s===void 0&&(s=n),e[s]=t[n]}),ce=exports&&exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),le=exports&&exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&ue(t,e,n);return ce(t,e),t},fe=exports&&exports.__awaiter||function(e,t,n,s){function f(a){return a instanceof n?a:new n(function(u){u(a)})}return new(n||(n=Promise))(function(a,u){function v(r){try{c(s.next(r))}catch(l){u(l)}}function _(r){try{c(s.throw(r))}catch(l){u(l)}}function c(r){r.done?a(r.value):f(r.value).then(v,_)}c((s=s.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const g=le(V());function pe(){return fe(this,void 0,void 0,function*(){try{const e=g.getInput("login");g.info("hi"+e.slice(0,1)),g.setOutput("time",new Date().toTimeString())}catch(e){g.setFailed(e.message)}})}pe();
//# sourceMappingURL=index.js.map
