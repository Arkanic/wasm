mod utils;

use wasm_bindgen::prelude::*;
use std::collections::HashMap;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc:WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn sentence_mode(s:&str) -> JsValue {
    let mut map = HashMap::new();
    for word in s.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }

    return JsValue::from_serde(&map).unwrap();
}