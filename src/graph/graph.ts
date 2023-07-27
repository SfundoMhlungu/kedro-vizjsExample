export const graph = {
    "preProcess_node": {
        "in": [],
        "out": [
            "1690273225749_0.6358387184154168",
            "1690273225750_0.3918177083754042",
            "1690273225751_0.11043761428613563",
            "1690273225752_0.7822403536616953"
        ],
        "name": "preProcess_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">preProcess</span>(<span class=\"hljs-params\">train_data, train_target, test_data, test_target</span>) {\n    <span class=\"hljs-title class_\">XParser</span>(train_data);\n    <span class=\"hljs-title class_\">XParser</span>(train_target);\n    <span class=\"hljs-title class_\">XParser</span>(test_data);\n    <span class=\"hljs-title class_\">XParser</span>(test_target);\n    <span class=\"hljs-comment\">// console.log(train_data.slice(0, 20))</span>\n    <span class=\"hljs-comment\">// console.log(train_target.reduce((flat, val) =&gt; flat.concat(val), []).slice(0, 20))</span>\n    <span class=\"hljs-comment\">// train_target = train_target</span>\n    <span class=\"hljs-comment\">// test_target =  test_target</span>\n    <span class=\"hljs-comment\">// console.log(test_data.slice(0,5))</span>\n    <span class=\"hljs-comment\">// console.log(test_target.slice(0,5))</span>\n    <span class=\"hljs-keyword\">return</span> [train_data,\n        train_target.<span class=\"hljs-title function_\">reduce</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">flat, val</span>) =&gt;</span> flat.<span class=\"hljs-title function_\">concat</span>(val), []),\n        test_data,\n        test_target.<span class=\"hljs-title function_\">reduce</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">flat, val</span>) =&gt;</span> flat.<span class=\"hljs-title function_\">concat</span>(val), [])];\n}",
        "index": 1
    },
    "shuffle_trainingData_node": {
        "in": [
            "1690273225749_0.6358387184154168",
            "1690273225750_0.3918177083754042"
        ],
        "out": [
            "1690273225759_0.44440424897248687",
            "1690273225759_0.35344512953082563"
        ],
        "name": "shuffle_trainingData_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">shuffleData</span>(<span class=\"hljs-params\">X, y</span>) {\n    X.<span class=\"hljs-title function_\">shift</span>();\n    y.<span class=\"hljs-title function_\">shift</span>();\n    <span class=\"hljs-title function_\">shuffle</span>(X, y);\n    <span class=\"hljs-comment\">// console.log(X.slice(0, 6), y.slice(0, 6))</span>\n    <span class=\"hljs-keyword\">return</span> [X, y];\n}",
        "index": 2
    },
    "shuffle_testData_node": {
        "in": [
            "1690273225751_0.11043761428613563",
            "1690273225752_0.7822403536616953"
        ],
        "out": [
            "1690273225766_0.6341020949368523",
            "1690273225767_0.9975100061543545"
        ],
        "name": "shuffle_testData_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">shuffleData</span>(<span class=\"hljs-params\">X, y</span>) {\n    X.<span class=\"hljs-title function_\">shift</span>();\n    y.<span class=\"hljs-title function_\">shift</span>();\n    <span class=\"hljs-title function_\">shuffle</span>(X, y);\n    <span class=\"hljs-comment\">// console.log(X.slice(0, 6), y.slice(0, 6))</span>\n    <span class=\"hljs-keyword\">return</span> [X, y];\n}",
        "index": 3
    },
    "arrays_ToNormalizedTensors_node": {
        "in": [
            "1690273225759_0.44440424897248687",
            "1690273225759_0.35344512953082563",
            "1690273225766_0.6341020949368523",
            "1690273225767_0.9975100061543545"
        ],
        "out": [
            "1690273225875_0.343435170114206",
            "1690273225876_0.6184289717780063",
            "1690273225878_0.7003281689009275",
            "1690273225880_0.7017068409967429"
        ],
        "name": "arrays_ToNormalizedTensors_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">arraysToNormalizedTensors</span>(<span class=\"hljs-params\">X_train, y_train, X_test, y_test</span>) {\n    <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">XtrainShape</span> = [X_train.<span class=\"hljs-property\">length</span>, X_train[<span class=\"hljs-number\">0</span>].<span class=\"hljs-property\">length</span>];\n    <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">XtestShape</span> = [X_test.<span class=\"hljs-property\">length</span>, X_test[<span class=\"hljs-number\">0</span>].<span class=\"hljs-property\">length</span>];\n    <span class=\"hljs-keyword\">const</span> yTrainShape = [y_train.<span class=\"hljs-property\">length</span>, <span class=\"hljs-number\">1</span>];\n    <span class=\"hljs-keyword\">const</span> yTestShape = [y_test.<span class=\"hljs-property\">length</span>, <span class=\"hljs-number\">1</span>];\n    <span class=\"hljs-keyword\">const</span> tensors = \n    <span class=\"hljs-comment\">//@ts-ignore</span>\n    [(<span class=\"hljs-number\">0</span>, tfjs_1.<span class=\"hljs-property\">tensor2d</span>)(X_train, <span class=\"hljs-title class_\">XtrainShape</span>), (<span class=\"hljs-number\">0</span>, tfjs_1.<span class=\"hljs-property\">tensor2d</span>)(y_train, yTrainShape),\n        <span class=\"hljs-comment\">//@ts-ignore</span>\n        (<span class=\"hljs-number\">0</span>, tfjs_1.<span class=\"hljs-property\">tensor2d</span>)(X_test, <span class=\"hljs-title class_\">XtestShape</span>), (<span class=\"hljs-number\">0</span>, tfjs_1.<span class=\"hljs-property\">tensor2d</span>)(y_test, yTestShape)];\n    <span class=\"hljs-keyword\">const</span> { dataMean, dataStd } = <span class=\"hljs-title function_\">determineMeanAndStddev</span>(tensors[<span class=\"hljs-number\">0</span>]);\n    <span class=\"hljs-comment\">// console.log(&quot;mean: &quot;)</span>\n    <span class=\"hljs-comment\">// dataMean.print()</span>\n    <span class=\"hljs-comment\">// train features </span>\n    tensors[<span class=\"hljs-number\">0</span>] = <span class=\"hljs-title function_\">normalizeTensor</span>(tensors[<span class=\"hljs-number\">0</span>], dataMean, dataStd);\n    <span class=\"hljs-comment\">// test features</span>\n    tensors[<span class=\"hljs-number\">2</span>] = <span class=\"hljs-title function_\">normalizeTensor</span>(tensors[<span class=\"hljs-number\">2</span>], dataMean, dataStd);\n    <span class=\"hljs-keyword\">return</span> tensors;\n}",
        "index": 4
    },
    "linearRegressionModel_node": {
        "in": [
            "1690273225875_0.343435170114206",
            "1690273225876_0.6184289717780063"
        ],
        "out": [
            "1690273225949_0.36425010199976326"
        ],
        "name": "linearRegressionModel_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">linearRegressionModel</span>(<span class=\"hljs-params\">X_trainTensor, y_trainTensor</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-title function_\">__awaiter</span>(<span class=\"hljs-variable language_\">this</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">function</span>* () {\n        <span class=\"hljs-keyword\">const</span> model = (<span class=\"hljs-number\">0</span>, tfjs_1.<span class=\"hljs-property\">sequential</span>)();\n        model.<span class=\"hljs-title function_\">add</span>(tfjs_1.<span class=\"hljs-property\">layers</span>.<span class=\"hljs-title function_\">dense</span>({ <span class=\"hljs-attr\">inputShape</span>: [<span class=\"hljs-number\">12</span>], <span class=\"hljs-attr\">units</span>: <span class=\"hljs-number\">1</span> }));\n        <span class=\"hljs-comment\">// print summary of the model</span>\n        model.<span class=\"hljs-title function_\">summary</span>();\n        model.<span class=\"hljs-title function_\">compile</span>({ <span class=\"hljs-attr\">optimizer</span>: tfjs_1.<span class=\"hljs-property\">train</span>.<span class=\"hljs-title function_\">sgd</span>(<span class=\"hljs-variable constant_\">LEARNING_RATE</span>), <span class=\"hljs-attr\">loss</span>: <span class=\"hljs-string\">&#x27;meanSquaredError&#x27;</span> });\n        <span class=\"hljs-keyword\">yield</span> model.<span class=\"hljs-title function_\">fit</span>(X_trainTensor, y_trainTensor, {\n            <span class=\"hljs-attr\">batchSize</span>: <span class=\"hljs-variable constant_\">BATCH_SIZE</span>,\n            <span class=\"hljs-attr\">epochs</span>: <span class=\"hljs-variable constant_\">NUM_EPOCHS</span>,\n            <span class=\"hljs-comment\">// keep 20% of the data untouched for validation loss</span>\n            <span class=\"hljs-attr\">validationSplit</span>: <span class=\"hljs-number\">0.2</span>\n        });\n        <span class=\"hljs-comment\">// console.log(model)</span>\n        <span class=\"hljs-keyword\">return</span> model;\n    });\n}",
        "index": 5
    },
    "evaluate_node": {
        "in": [
            "1690273225949_0.36425010199976326",
            "1690273225878_0.7003281689009275",
            "1690273225880_0.7017068409967429"
        ],
        "out": [],
        "name": "evaluate_node",
        "func_def": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">evaluate</span>(<span class=\"hljs-params\">model, X_testTensor, y_testTensor</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-title function_\">__awaiter</span>(<span class=\"hljs-variable language_\">this</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">function</span>* () {\n        <span class=\"hljs-keyword\">const</span> m = <span class=\"hljs-keyword\">yield</span> model;\n        <span class=\"hljs-keyword\">const</span> result = m.evaluate(X_testTensor, y_testTensor, { <span class=\"hljs-attr\">batchSize</span>: <span class=\"hljs-variable constant_\">BATCH_SIZE</span> });\n        <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`Test-set loss: <span class=\"hljs-subst\">${result.toString()}</span>`</span>);\n    });\n}",
        "index": 6
    }
}