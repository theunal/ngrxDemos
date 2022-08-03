## 1 - ilk olarak state klasöü içerisinde state.ts dosyası olusuturup içerisine state'in ilk değerini veriyoruz

## 2 - action.ts dosyası olusturup içerisinde createAction() fonksiyonu ile action tanımlayıp içine action type yazıyoruz

## 3 - reducer.ts dosyası olusturup createReducer() fonskiyonu ile reducer tanımlayıp içine ilk değer olan initialState'i veriyoruz sonra on() fonksiyonu ile ayrı ayrı her action için fonksiyon olusturup içinde state'in nasıl değişeceğini yazıyoruz

## 4 - app.module imports içerisine 'StoreModule.forRoot({ denemeStore: denemeReducer })' yazıp denemeStore adında bir store olusurduk ve reducer'ı verdik

## 5 - state'i değiştireceğimiz component içerisine 'constructor(private store: Store<{ denemeStore: CounterState }>) { }' yazıp store'u inject ediyoruz. burada store adı ile constructor içerisnde yazdıgımız ad aynı olmalı. state değişkliği için ilgili metodun içine 'this.store.dispatch(actionAdı())' yazıyoruz dispatch() fonksiyornunun içine önceden tanımladıgımız action adını verdik.

## 6 - state'i başka bir compenent'de çağırmak için yine constructor'a store inject ediyoruz sonrasında select() fonksiyonu ile store içinden state'i çekebiliriz. 'this.store.select('denemeStore').subcsribe()' yazıp ilgili store'a abone oldugunu yazıyourm ben state her değiştiğinde bu fonksiyon çalıaşacagı için ekrandaki değer anlık olarak değişmiş olacak.

## 7 - selector.ts dosyası olusturup createFeatureSelector<storeType>('storeAdı') fonksiyonu içine state type giriyoruz ve store'un adını giriyoruz. createSelector() ile istediğimiz veri türünü return edebiliriz