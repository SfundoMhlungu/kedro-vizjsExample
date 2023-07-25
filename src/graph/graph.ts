export const graph = `{
    "load_irisData_node": {
        "in": [],
        "out": [
            "1686455088982_0.8344147255839445"
        ],
        "name": "load_irisData_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">loadIrisData</span>(<span class=\"hljs-params\">data</span>) {\n    <span class=\"hljs-comment\">// const data = iris_dataset.split(&quot;\\n&quot;)</span>\n    <span class=\"hljs-comment\">// const columns = data.shift()</span>\n    <span class=\"hljs-comment\">// data.shift()</span>\n    <span class=\"hljs-comment\">// const samples = data.map((row)=&gt; {</span>\n    <span class=\"hljs-comment\">//     return [</span>\n    <span class=\"hljs-comment\">//                ...row.split(&quot;,&quot;).map((col)=&gt; {</span>\n    <span class=\"hljs-comment\">//                 if(Number(col)){</span>\n    <span class=\"hljs-comment\">//                     return Number(col)</span>\n    <span class=\"hljs-comment\">//                 }else{</span>\n    <span class=\"hljs-comment\">//                     return map[col]</span>\n    <span class=\"hljs-comment\">//                 }</span>\n    <span class=\"hljs-comment\">//                })</span>\n    <span class=\"hljs-comment\">//            ]</span>\n    <span class=\"hljs-comment\">// })</span>\n    <span class=\"hljs-comment\">// samples.unshift(columns)</span>\n    <span class=\"hljs-comment\">// console.log(samples, &quot;samples&quot;)</span>\n    <span class=\"hljs-keyword\">return</span> data;\n}",
        "index": 1
    },
    "final_precocess_node": {
        "in": [
            "1686455088982_0.8344147255839445"
        ],
        "out": [
            "1686455088998_0.33953966537349345",
            "1686455089188_0.8474499413316412"
        ],
        "name": "final_precocess_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">finalPreprocess</span>(<span class=\"hljs-params\">samples</span>) {\n    <span class=\"hljs-keyword\">const</span> response = [];\n    <span class=\"hljs-keyword\">const</span> columns = samples.<span class=\"hljs-title function_\">shift</span>();\n    <span class=\"hljs-comment\">// console.log(columns)</span>\n    samples.<span class=\"hljs-title function_\">forEach</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">arr</span> =&gt;</span> {\n        response.<span class=\"hljs-title function_\">push</span>(map[arr.<span class=\"hljs-title function_\">pop</span>()]);\n    });\n    response.<span class=\"hljs-title function_\">unshift</span>(columns === <span class=\"hljs-literal\">null</span> || columns === <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span> ? <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span> : columns.<span class=\"hljs-title function_\">pop</span>());\n    <span class=\"hljs-keyword\">if</span> (columns)\n        samples.<span class=\"hljs-title function_\">unshift</span>(columns);\n    <span class=\"hljs-comment\">//    console.log(samples, response)</span>\n    <span class=\"hljs-keyword\">return</span> [samples, response];\n}",
        "index": 2
    },
    "train_test_split_node": {
        "in": [
            "1686455088998_0.33953966537349345",
            "1686455089188_0.8474499413316412"
        ],
        "out": [
            "1686455089525_0.7931228504314838",
            "1686455089527_0.20267223338403006",
            "1686455089531_0.07318352643790926",
            "1686455089533_0.018094199709074665"
        ],
        "name": "train_test_split_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">splitData</span>(<span class=\"hljs-params\">samples, response, parameters</span>) {\n    <span class=\"hljs-comment\">// console.log(samples.length)</span>\n    <span class=\"hljs-keyword\">const</span> columns = { <span class=\"hljs-attr\">X</span>: samples.<span class=\"hljs-title function_\">shift</span>(), <span class=\"hljs-attr\">Y</span>: response.<span class=\"hljs-title function_\">shift</span>() };\n    <span class=\"hljs-comment\">// console.log(columns)</span>\n    <span class=\"hljs-comment\">// console.log(samples[150], response[150], samples.length)</span>\n    <span class=\"hljs-keyword\">const</span> [X_train, X_test, Y_Train, Y_test] = (<span class=\"hljs-number\">0</span>, scikitjs_1.<span class=\"hljs-property\">trainTestSplit</span>)(samples, response, parameters[<span class=\"hljs-string\">&quot;test_size&quot;</span>]);\n    <span class=\"hljs-comment\">// console.log(X_test, Y_test, &quot;Test daata&quot;)</span>\n    <span class=\"hljs-keyword\">return</span> [X_train, X_test, Y_Train, Y_test];\n}",
        "index": 3
    },
    "KNNclassifier_node": {
        "in": [
            "1686455089525_0.7931228504314838",
            "1686455089531_0.07318352643790926"
        ],
        "out": [
            "1686455089550_0.5879597070624638"
        ],
        "name": "KNNclassifier_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">KNNclassifier</span>(<span class=\"hljs-params\">X_train, Y_train</span>) {\n    <span class=\"hljs-keyword\">const</span> clf = <span class=\"hljs-keyword\">new</span> scikitjs_1.<span class=\"hljs-title class_\">KNeighborsRegressor</span>({ <span class=\"hljs-attr\">nNeighbors</span>: <span class=\"hljs-number\">5</span> });\n    <span class=\"hljs-keyword\">return</span> clf.<span class=\"hljs-title function_\">fit</span>(X_train, Y_train);\n}",
        "index": 4
    },
    "predict&evalnode": {
        "in": [
            "1686455089527_0.20267223338403006",
            "1686455089533_0.018094199709074665",
            "1686455089550_0.5879597070624638"
        ],
        "out": [
            "1686455089562_0.8484437815323027"
        ],
        "name": "predict&evalnode",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">Predict</span>(<span class=\"hljs-params\">X_test, y_test, model</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-title function_\">__awaiter</span>(<span class=\"hljs-variable language_\">this</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">function</span>* () {\n        <span class=\"hljs-keyword\">const</span> y_pred = <span class=\"hljs-keyword\">yield</span> (<span class=\"hljs-keyword\">yield</span> model).<span class=\"hljs-title function_\">predict</span>(X_test);\n        <span class=\"hljs-comment\">// console.log(X_test, Y_test,Y_train, &quot;test data&quot;)</span>\n        <span class=\"hljs-comment\">//    const y_pred: Tensor1D =  clf.predict(X_test)</span>\n        <span class=\"hljs-comment\">//    console.log(y_pred.arraySync().map(n =&gt; Math.round(n)))</span>\n        <span class=\"hljs-comment\">//       console.log()</span>\n        <span class=\"hljs-comment\">// })</span>\n        <span class=\"hljs-keyword\">return</span> y_pred;\n    });\n}",
        "index": 5
    },
    "AUC_node": {
        "in": [
            "1686455089562_0.8484437815323027",
            "1686455089533_0.018094199709074665"
        ],
        "out": [],
        "name": "AUC_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">AUC</span>(<span class=\"hljs-params\">y_pred, y_test</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-title function_\">__awaiter</span>(<span class=\"hljs-variable language_\">this</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">function</span>* () {\n        <span class=\"hljs-keyword\">const</span> predection = <span class=\"hljs-keyword\">yield</span> y_pred;\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;\\t\\tAccuracy: &quot;</span>, scikitjs_1.<span class=\"hljs-property\">metrics</span>.<span class=\"hljs-title function_\">accuracyScore</span>(y_test, predection));\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;\\t\\tRecall :&quot;</span>, scikitjs_1.<span class=\"hljs-property\">metrics</span>.<span class=\"hljs-title function_\">accuracyScore</span>(y_test, predection));\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;\\t\\tPrecision :&quot;</span>, scikitjs_1.<span class=\"hljs-property\">metrics</span>.<span class=\"hljs-title function_\">precisionScore</span>(y_test, predection));\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;\\t\\tConfusion Matrix&quot;</span>, scikitjs_1.<span class=\"hljs-property\">metrics</span>.<span class=\"hljs-title function_\">confusionMatrix</span>(y_test, predection));\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;           &quot;</span>);\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;\\t\\trocAUC score&quot;</span>, scikitjs_1.<span class=\"hljs-property\">metrics</span>.<span class=\"hljs-title function_\">rocAucScore</span>(y_test, predection));\n    });\n}",
        "index": 6
    },
    "save_model_node": {
        "in": [
            "1686455089550_0.5879597070624638"
        ],
        "out": [
            "1686455089587_0.3717179375813966"
        ],
        "name": "save_model_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">SaveModel</span>(<span class=\"hljs-params\">model</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-title function_\">__awaiter</span>(<span class=\"hljs-variable language_\">this</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">function</span>* () {\n        <span class=\"hljs-keyword\">const</span> m = <span class=\"hljs-keyword\">yield</span> model;\n        <span class=\"hljs-keyword\">const</span> j = <span class=\"hljs-keyword\">yield</span> m.<span class=\"hljs-title function_\">toObject</span>();\n        <span class=\"hljs-comment\">// console.log(&quot;model json object&quot;, j)</span>\n        <span class=\"hljs-keyword\">return</span> j;\n    });\n}",
        "index": 7
    }
}`