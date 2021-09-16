<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://www.tripgether.com/wp-content/uploads/tripgetter/Nasiam_05.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            ณ สยาม เกสต์ เฮาส์ แอนด์ คาเฟ่
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            100,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          171 ซอยสุ่นอุทิศ ถ.เยาวราช ต.ตลาดใหญ่ อ.เมือง จ.ภูเก็ต
        </div><div class="text-caption text-grey">
          tel:086 696 3669 <br> Email: nasiam_phuket@hotmail.com
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

     <q-card class="my-card">
      <q-img src="https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-mai-khao-phuket-villas/the-resort/desktop-banner/anantara_maikhao_phuket_poolvilla_header_1920x1080.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            นาวาตารา ภูเก็ต รีสอร์ท
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            100 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          90/28 ถนน วิเศษ, หาดราไวย์, ภูเก็ต, ประเทศไทย, 83130
        </div><div class="text-caption text-grey">
          tel:076 363 000 <br> Email: reservation@phunawaresort.com
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://athkzxqaro.cloudimg.io/v7/_cpw_/images/5-star-Resort-with-Private-Beach-Phuket.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            โรงแรมเคปพันวา
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          27, 27/7 หมู่ 8 ถนน ศักดิเดช, เคปพันวา, จังหวัดภูเก็ต 83000
        </div><div class="text-caption text-grey">
          tel:076 391 123 <br> Email: am@capepanwa.com
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://exp.cdn-hotels.com/hotels/2000000/1600000/1594200/1594116/8252af78_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            บ้านกระทิงภูเก็ตรีสอร์ท
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          11 Ao Sane Beach 3 หมู่1 ถนน วิเศษ ตำบล ราไวย์ อำเภอเมืองภูเก็ต ภูเก็ต 83130
        </div><div class="text-caption text-grey">
          tel:02 718 0858 <br> Email: reservations@baankrating.com
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="https://images.trvl-media.com/hotels/7000000/6390000/6386800/6386707/f30cbf01.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            นาวาตารา ภูเก็ต รีสอร์ท
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          90/28 ถนน วิเศษ, หาดราไวย์, ภูเก็ต, ประเทศไทย, 83130
        </div><div class="text-caption text-grey">
          tel:076 363 000 <br> Email: reservation@phunawaresort.com
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://pix10.agoda.net/hotelImages/732308/-1/4c06afb7976a983c2746fc7344358e29.jpg?s=1024x768" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            ไม้ขาว โฮม การ์เดน
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         176 ม.3 ต.ไม้ขาว อ.ถลาง จ.ภูเก็ต อำเภอถลาง, จังหวัดภูเก็ต 83110
        </div><div class="text-caption text-grey">
          tel:086 594 0960 <br> Email: maikhaohomegarden@outlook.co.th
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="http://img.painaidii.com/images/20170519_4695_1495183413_104104.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            บ้านลายไม้ บีช รีสอร์ท
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
        66 ถ.ทวีวงศ์, ป่าตอง 83150, ประเทศไทย
        </div><div class="text-caption text-grey">
          tel:063 698 9966 <br> Email: -
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://pix10.agoda.net/hotelImages/18859217/-1/d453902d01305969f80a009f38694eca.jpg?s=1024x768" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            วิกซ์ แบงค์คอก อนุสาวรีย์ชัย
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
           459/13-15 ถนน ราชวิถี แขวงถนนพญาไท เขตราชเทวี, จตุจักร, กรุงเทพ, ประเทศไทย, 10400
        </div><div class="text-caption text-grey">
          tel:065 441 4164 <br> Email: general.vixhotel@gmail.com
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXGBcZGiEdGhoaGhoaGRwYHRkYGhoZGRoaICwjGiApHhcZJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHhISHjIpIyoyNDI0MjIyMjIyNTIyMjIyMjIyOjIyMjIyMjIyMjIyMjIyMjIyMjIzMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABFEAACAQIEAwUEBwUGBgIDAAABAhEAAwQSITEFQVEGEyJhcTKBkaEjQlKxwdHwFHKCkuEVM0NTYtIHFpOisvFjwiTi8v/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EAC0RAAICAgICAgECBAcAAAAAAAABAhEDIRIxQVEEExRhgSJxkaEFMrHB0fDx/9oADAMBAAIRAxEAPwDx2ugK2BWiawTA1dAVETXSEaz7vxmsY7A8vyrc/r+lau3NRDEiByiD08/Wo8xrIDJ81dC512qCawNyrADkvldRqOnMfnRCXlfU79RoZpWjR6USLcmQdeo/WtK0Vi2O8BjblppU51OjKdMy8xPXmDyNeidkeIZgbWaVjvLROkofaWOUHWORzDlXlNu6Ro2nny/pVv7EYg99bTeCWX0ZCrD4lSP4utK1YW/R6eq1OiVHhxRyAUU+JJrkQhK3lqeKzLVVIk4kIStZKnitis2FIGa3UbW6YBKjZKjKZVYwB0rzztVxQNdedbdrwAfaY6NHqfDI5Ka9Cx98W0Zzsqlv5QT+FeJceusciTrGdzzLNr92v8dJDbKSVAOO4izsWOrH5dB5Abe6lz3DuakcAChHk1ZCSbZjXKwPUbGtUwpKr/qa7zDmKhFY1AwXkJEARI0nf18hQc12pJBE6AfltUVBBNzW65iu1FEB0q0QlqpcDhHuMEtqWY7ACTXoXZ/sctuLl+Hbkm6D977R8tvWkyZIwVseEHN0imWOAXXUMtliDqCBvWV653Vbrm/LXo6fxmeFG2RUZWrjxLsyk3Gt3VRFzGLpjQHQZlG56RM6UiXhT933jK/d/bCtl9xj8hXRDJGatHK4tCcrUlq2SfIc/dRZyDZCfNjA+Ak/MVHduMwiAB0AifUnU0+waBIrcVMLVbNuiBg8VuKka3WstEx0moqRGK7bfdUapGtFIKDQUwuyAw61YuxlqMZaCkxLGPIW3qt2Ujbbn0r07sD2ee1OIughmWEU7hTqWI5EwIHSetSk+Ksoly0XaytFKKht1OjVzyylY4iVEreWuVetm5TLOB4TRWuChrvvK3NP9qkhFi4s4Dcqxtq6Fs1tkikSHbFuOwveI6faUr/MCPxrwjip+kcnqR7h4R8gK+hHivGO2vC+6xdwkeG4e8Q8vEZaPMNI+HWng1dAknVlMdSTJoe50o++kbUJ3VXRFkEVpFqZk5V2lqiAhyVopRBt1ru6JiGy5Vpj3VMFtnk3wH51PhsA9xsqKzE8gCT8BVx4N2BuvDXSLS9Paf4AwPefdU5zjHbY0YSlpIp9vCoxgBvLTT5En5Uzw/AAl1FxDPZRxIZ0MHyDbD3jTnXq/CeA2cOB3aeL7bat8eXuijsfw23dtslxQynkfvB5HzrnfyFdLo6F8fWxVwrg9qwkWlAnc7s3mW5/dTFbdVjgl65hMR+xXGzIQWsOd8usofT8PMVbkqGSEm97KwlFI4yVlTVlQ4MvzR5OrHE3S9wA2keMo0RmzSzMfsjN8/Mg2y12le7dW3h7VsW/ZGYqoMELKyQB5L5gVUMIjDD2lE+MllII9oklue+WRHME0w4ZfIZwbefw5QUJWCx1AbTKJB10kkmr8+LaXR5vCVl2xPZXD3lzPYCsd9MjztqUOvxNIsZ/w2tnW3ddD0YBx+B++r1wK5ce2ouJGVQM05w41AIddCYXX1o3ElUVmYgKoJJJgADfWr8pLaYyS8njmJ/4eYhfZa248iVPwI/Gl13sfi13ssfQo33E1euJdtslwKlvwtpLgjKxGkjQxqpIid/dbuH3RcEMAH6A5gREhlI5UFnkZQg+jwx+zuIG9i9/0nj4xUQ4Bf8A8m7/ANN/yr6AVUJIUglTBggweh6Gtm2Olb8p+h/x0/J4ThuyuKfbD3f4kKf+cU8wH/D3EORnyWx5nM3wWR869ZW0K7VKP3zfSA8UF2VjgXYvD4chmHe3BszgQD1VNh75PnVoVKkW0TUi2jSNTk9jXGK0BuhFYJpklrStHDij9Vi/bQvBNdhTRy4WpFwwofSH7QBVrsPRb2RXK4cVvraD9iZwjVxcWiBZrk2R1rUzWhc3pSzjXBreJt5LgPVWHtKeo/LnT9lA5VrL5VqrYbs8b4t2FxFskoBdHIrAaPNSfumqziOD3l9q1dX1Rh94r6DexNB3ML5VeGRvsjOCPA04ZcO1q4fRGP4UfhezGLf2bFz+IZP/ADiva/2MmsNhUEn40uTO4rSGx4lLyeWYb/h9iG1uPbtj1Lt8Bp86cYLsJYTW4zXT5+FfguvzNXohdTI9DPx0rRwygKRmIPMjT+leXL/EpPJ9btfto61gxoUYLAW7Qy20VB0UAfGN6PVqK7ochWC3VvrnPbYfsjDSRCo8q7AqSKwCqY8HHtk55r6Kd27wh7pb6Dx2HDg84kBh6bH+GrDgLouW0cbMoYehAI++t8bwneWLqfatsPippJ2Px4/Y7BMGZt7xBDMq8ucActY8460tHM35LJFZQ93iCoSrXApHLIzQDqBIOuhFZScUNzZ57w60ps21zAtkDAaaECR0J0FPLdu1h7aNkt3S8g6NmRSu+jwZJJ1Hv6oeDO3g3yC0p0y75YiBqTrpvqOmlFftrrK5syjT2YcGdAV0GxOp00rznzjKVU7/AOTq/hlFNvrRDhcUysGObJABIDQ3h2dZE7a9RRtzi964j2ybbBoLAM8EDLHtxMyAQOmu5JGw5YuWYqBA16xOkzCaaRrrGtQXpbVfFOhzQGB+qS8a8uVLzkm0ZLltu69+S38Ewimyi3ElrSmEyo2ZXzHxCSw+t01PxL4Lw5Bca5bY20VgSACqtMlpzE9dhEfco7L8YWwjSQzPBynYRoCGPKJG3TpqdjO1WEfxBrjsSMls+BFbT2iBEEqJmanizZozakrVrx0JPGntI77NF1fE3XkKFDPqJkAtPVvCdD6VaMI4uW0uKDldQR115GOdIuH49z3q2QGBBdc4Pdh/CSoJEgwGIB30Mg047OY+2MLbzFF1ZTlUqpYOc0CPOT7zXpQjGWkQ5yiGpbNd93ypUO0aL3jOIVHuL/qlAIWOp3Hr5VF2j4kVGEa2+ly6hkc0gTPkQ4n1FV5Rgicm2PkSKwOCCQZiZ15jcUsbjGXFXLDAZUtd5PMkGWHT2SNPI0l7K40jC4y5M3JuXspU6ZlaNtxKHbpypvsjyS/mCi5qhpbb4kf2xsMQABaDgmZZixBjlAEfOk47S3uYt/yN79n8qBuX7j4lcULiBgvd5RbMFRJ3Nyec/KtLItUH6pF+C1srVVHad1chhbHhG8jm3+o/qKxe1DFhC2yu0ZiDMjWY056Rz8qZzibhL0WjLWm0qqntDca6rhVyKrKUFzRiSCGnJoRl6fWNSYjtAzG0vdqoa4gJ7wnSZOmQTprS8osPGS8FhaK4zchVc7Q9p0sObaBS0HVpAzawBA12pN/zs7KSlsBlQjLuWuROddNEEMI8x0qTyQTqxrL9pXDa7V57w3tjcA+k8eTNvClyScqsTosanToKLu9tWdrYs2nZpJddCCsDaJgSdSfx0VZIydIPXZdu7POlXaG93eGvONxbaP3iCF+ZFCWuP3mQA2kD9cxI/lH+741V+2OPuvb7oucziYGigD2ZAidRImfZq8eNaEdsvOEvC5bRxsyhh6MAR99c3Emkn/D7iQvYNQSM9rwsOnT3bj3U0ucXtZbjKxfuzBCCZMTpyI5TtUsit0UhJI67qpXZRbUBhJ39CSQPiPlSR+0GsKoJNudYGVmchcwBMwMokSCSSDXnXajH41rhD93Cjw5CWTKGOwfmC0GQDqK45Y45JpRatO9lOafZ64ajv3VRWdyFVRJJ2AG5qpdlruIsWUfFXGdHthrVtUQBFnQZgASY1iYAIoftR2i7xGtWzlQsoJicymIJ5rDAj4V2OUY68kJy8jte1OHNzuwWnWCQFUkA6eIjKdI8UbiiuH8Yt3WdBKsmrKcrECSJ8BI5bTzFeY2gMyWyNcxmRIOYEACNv61buz7gYG61grbvlZYsVBJDO2RTpHhy79eVTx5W3v8AmIpWrLHc4pYOZe9UwJMaiJK+0NKoHZXiIt4fuxAAZ+8LKWVk00MEERJ9dKjt3bikySqhckhsxzGTCzAUEknpryFCdmlPd3BkzDvWH1RBjQkmZ9KH3SlF14aDyDMTaFx2dVdlYyp7wDw/VEMZECBr0rKguvdJJ7oa/wCkH/7Vqhc/aNzR1wxitgOp2TWJ5KoE7ToSd+lR4fhkktcfRh7GoGU8yBOw+AHmKH4Y4S1bcXAugZ1YTMEqsajpvr7qYXi6W7jpcVi0SQfEA0mDMAjK24kSfKuefJSaTq2Xg1yTkrS8HN24FnISyxJIUgCSVUlgN506wRoec2BRri5kFvQjxbArEgMy6hhB1HL0oX9qCE24VUJOaTrruw0Mify86aWcVatkKuXLIhQdXzSdesFtJ68oNJkTSpK2UTi230vQtxuHDoQ9sEgDMoIEMAQsGfCAF+B91JMHwtBiXtPqF9mSJ1Ej3+7erj3tu5KqVXOSCSCpYQQ0Zd9oBI5c6TYbB27mMtsSTmRpZWDDMgBUmG5gxHnt0t8fK1cX6f8AUSaVppjxAbdoW7QyWyQQA2k6troS0gz5mrVwbEL+zDvVtwXVRsDkGpYjnGYAadJqp3HtjPbESD4gZBMajJp5R+pprgbyLbGZmQhQANAJ11EbHffy8q5cfyHjfKV+SmXGvHRz2mQpcu5TKNEbwSBEkHY8p5wN4oPEcRW5aREBDW7hgg6kMohoncFdNo95oq9xVGypdi5uEnMZ0AUMFOg1gzrtS3E2YcFVEfXhdQSSFOURoYI1nYUcnyeUrSateTnqkEcb4wVxbXEYnNZyOdJJZdZG2gKj3VrgXFMtt7Y1L22ttMZSGLZcpkQBM+rHygDiPDHDl3Kr48rWwQcqQCpJBgaaRpE85mheEWWUzICmRm6NmJB8wTpI8p8njk5fxJ7Er+Ki2DEuCIGhJ3gGCQQAB0BMzTLDLKqYBOzRt/TQik2IcwCGSCfsQAZHU/dO/rRmHxNxRCvZWTJHdkmdBJK3BOw5cq6ccnezp2SJbH7W4IH9yh6wc9z8aKuYa2SvgX4DcjQ/L5Uow9+4uLa447xTZCE20ygMHYx4nOonr0psnElkfR3Pgn4tXQ0KjX7HbBB7pOvsiTyI1G0/oUDxLBJlBRApkqGC5TLK6Lt5uDR7cRQgfRXdddVWR8G8vnQ3E8X3ltwlu6HIlTCxmU5lnxdQKC7C+ilYhXuv/eSd5GklvfBYgidhrXFnhZUqXJYwZEwANlk6ySZ02Gm9Wh8ILbHKQVILNEQNNQFkkDTQb/CpmsqJltoGUAEj96NQNBH9a4JOcZNJaEUF2xDas22+jbxRLmZzEhWzarvoCNetWDszwnu7Zu5Ya5ESIOQDwz6kk+kdK3/ZiFhcA2B0JKAqST4jBIEk1rHdoFtyDdSQIy2bZZh/GxIj+Gr/ABour3+40vY1xd5LCZ7mgkCfmfkCfdFUjE4nvma6+7GVExCgQqn03PrUGK7VBj9JZvuAdM10r6NFvKAfdXH/ADYgn6C+I1P/AORdEfF67lFonyj5B8BxD9lxJP8AhXQQwnTxKV8XIDX5CmOK4obaNkzZXbM0GIDZVKHLAgEEg7a+VL73a222jYe8QdNbzx6atFSYh7dxFmybQ5fTTAJmcpQ9eRFSywtpsSTVaZsYk21LPczMwAIkeFcxZfvmBHMVB2rLMiMgZYUEFjmBDQrKrQZ1Ck/unnUF3C/SLDBkbUxJ8I3U6+XU8taO45i7IttbKwukgDOoMDluI035c654wSyKSEt1TCFxcKqB9dJiQp8Pj0PIkDXcRvS7iOJBKEAiSAR7WkxHnvM1GlxDI8e4ZDAHqpkkbRGvOhcQpuMVO51gCNQAYPuEfCpRxvnbYJStEyWjDPIm22ViNCQMxgTuYAEDfWuLbeMBA2XwqdAGRpnMsbKfubyFT8ORmt4hWAkMGLc9yBtodCaW3L8ENrBOVtN4kaT6frar0naXg3Sssd7FPmIuO5H1W8OkxIY/WAEcp1PWlPDXH0ytP96T4WZRrHQbVtcSxXY6wJkEaamDMTFLcIy57hZGfxCCDsCBqdP1FJhhxUv26DafkfZV5i78LJ+bCT76ygRaB17i57mIGmmkit03JBqPtEnAML9GlwqGjl4ZhTqCW03J+XKpuM4hyqrbRWVhuPEAQ0QYMaaenpFL+FYdmtM+ZoggLJCxJkkTE/lRBwJa2o8epg5TEEbAxv199JNJZG2+mUjOo0gZmuCGKBmPOMzKARoB1MfOrVg0U21eAreBtoaAJMx8AKT2bcBQMsoNnaNZEkMSBmgkSD0ptw5rbW0i6ArtOVlZjoQwBI0A1mTyj3QzStJ+n4HxTptCrEXM3jYjMCMsKJMEQwM7QVBgToepgPEd4rpcXKEMwAgb6pYiQTzEajzo3D2srklhkkk+EMRqsxIkHQ/H0qC9hCt5Q1xyDqJJiMpmJ9atCcU6/wBhHJPYxuYQ3ENxSSw9nIQG0A0I9kgeRmgExGImMzMhIMsuh0nKZ02EfiKa4RVRRACNIYgaDNliQBoD60Vg+FupGREy5pmNwRBEfrlXNFt2qv1aDKfJ2xQuFugd4BbUe0cuXUAbKpBjYTp9ajziTbuoxzWxkIJHjjKQwGwmSvziue0fB7kIxkATJ2EmNPlSTD4Ns+U3Qu25+EwOoFdeP4qyR5S/0ByS0kT/ANtvcvaloDDSAC3IToROUmOlD8QFxHlScu4GhAJO2mm41ipv7HuEmLqyI18Wu2ohToPdtXd3g1wSTdtjnA7yRzn2Yqy+NGLXEXtbGWPD/s6d2DmMm5DAlUBzEa9SRETpI051jE2WUjLn9i2TBaMxaGinFgqqsO8BOsNJ0PkN9vvqexbtDLN9WEQdH3knTw+dWxxcQzqXQux2EeQUe6Axgw76E7ECYiTr/wC6gwlu41xFZrsHMG8dwbFwDM6bD406upbPs3lEHaH1/wCz5VI9pH3u9d1cmTEKPD5fOqK6A0rAsfhWXVWvRm1i5cjLzjWIFKLXeZc7XLsSo0d9ixmdd4FP+/W0V+lUwx+jGaSp9oRkjUTz502s8KZiH75QpAPiuZXM5iCRBkQy6VkmkarYnwFgrcCsbhRmAlmYgadeW5XyzioOIY3EJlW0HRiSGK2irHaHL5QTMmByAEmZpjftLbcIzKfErqUBImdfio+Kit8R4Vbdu87y6AR/lDaP36VxaltBe1pgr4bF3LWbOxZmRiCwBXKri4IPIkIcu3iI2rvE3b1tLRtWwMygkLb/ANKjUDY5s3SicNgBGhfJMTAmddcpjqefvphwuxZuXe6zPKL9YRz0Oh1JzfKlUbdtDOVKkxXgLFy5bLXUIbNsVy6DUaetKOMYO4HuRbYyOQnZLo1jzj4jrVr47w63ZBIuNAljEzpvAXbf51UsVxG1za5toCrR899TTqO7Ek9U2atWoQll1DsQGET4jHu1oTG3iUBJKtmIIUHkeQPkJk9aMV0IZBcXVS0cydNBtGk613bvI6lXllLTpoSCCWjbQAAedQyz4tOrJzfhEXCeIIkAjwldWGXPmAnSY11A6EHWjsZewpQMUvByMoYlYbb471BgXtkBABpJGgBBKsTM8jLa+lHLh7Tld7gUzmjwgnaOXKuTJlXK2mFSaQLgcSltyipLEmC+0zyQHKBrz6zzrgWjbuEkKI1nXUg/VXYaSI/Kpr7BGKjKCDIBgEgnUnTUHWNeXnW+8MAyrCCpBYHUbTr1za+m9LKTt0gOfgyzeXK5goXljovsADKTBI1zn4fBNee29uc05mhVAljsSWI0BGtMVuIzu2WXcwygsTADagHQgiNtoFS4fCgaLlASJyyRBAgg9QPIifOmU4x9p6BKdqkBYEgqDoPESyTowymQY9rUA0CMWyvddQRcnMFA8IjmwP2QDHOTVmtYPIrjKBnWVkgEEQZg66mND151X2webE3EE+zrJVDyDEkQPz050+LLGTd+gcXQP/ZxbxNdEtqZcTrrrHrW6sFlQqhTeiOXg0HL6nSspPyH/wB/8EoB4AxW0hE78gJ9rlOnr68t6YNxMZiVmQDskAkczIPxpb2fUd2Z2V2nSZiCJHPenWe2TPiy7HbU7n3bD31PO4/Y7VnSpR4gmDZhlLAtoWA5akjlGnh+dc/tF1HJtofGBK7gwIEEayBpNOcE6iIQaczJ000EedSpxJFOZhbDTsWAPKSAd9/vpk4u6jY8ZpO06/UAwnC7lzxCRprpA13gHWocTw64oVmmQy+IcpaN9/rdabntRbWZI9wO3WTpS7ina9HtuvLIGkDWCwhhEzqRV4YG2nQjmhxhuCHu1UsZBmTuatGAwoAGm1V3h3FXu21dgBm2AM6axvzp1hsfoPzqsKuvQHIaYqwrrlYSKQ38LZD5CUzHZSRmPu3NMrmJ0k15nxPEWxxUHKZzJOuhY5YfygEac8tdNJici9NgNIA0mhsThXBAHSJPSmFjGrGpqLG8SQbkUeVAbsU4rgsW2YHxQ2+u9Vy2lu0hVruu8ZA2ummbOI2HKrXc42gXRhI29fOqfxbEm7cL5yGO5Ej7mpHPexuSSJv2iwACLzEiSB3QGp8+805VPe4hZIH0hJUED6MQdN2Iu/OkowxO9y5H7z/Lx1zewCkeJ2YDaSx+9qH2IHP9BnjRZuHOb1wETr3I6ydRcg7/AHUe2MseHMbnsJH0a7ZF1gmRNVzEWUCZZkCSs5jrrGsjmTRuKwSXTbOZCFs2gNQYItrmWAdIO/Q03Nv2FT9DDGYywxtsHu6KfZtpIhjAIDep16j3QXOK24C5ruUDSLImfcxpXc4fbWADB5nWJnSPdUb4OP8AEI95/A0ryU6ZnOxsOMKPCHvZTv8ARCR0rOFYpDdZx3hVlK52RgoYZSNhl2FK7eALf4hj1NMuCWSHNjP9F7RECDoADMTzHPlQeX0DkvJZ8BgLbJLurSD8yPypZxrgilmKhSC06x1OvzqPHWVtrlt3IM9etLb15zoWB06ev5UJZActVQHxEW7HiNpmLyvhMAFhHTfXT0qIcIBM6jUeZncDTnOlBdpbpKpBjVttPs04w+IYWUI3OUzz2H41LPKShFxF5MHtcLZmIEyQNW30X18o+FFrhGUNmc6CCHzAmSmm/PKZifPSusPimygRJO56iG/p8K6xuKm00EaZgZIkSNvga41LJKaT9h5aBr6G5mYOEzbjMvnp0Mef2qFXhtzwxJgnXf36b/1qu2mypAOq2326l8tTX7rp3kOTkRF3kZjlkxtyOvnXpP4y8M1lkxmFukjM0ppmCCJXxTAjTn7zTLCkhhETCzuNIb2Y0B/u/PeqiMbdRnGc+C2JiB9IVXWRrvPwqReN3wLfiabntCX2zQDBMba1Kfw3JUmv6GTp2OlN8XbkRnz+MCTBzr7KnQ6j9ChcQ9z9qfL7eQ6eXeAR6R93Khk7RXczjTwBjMJLQf3ZExvPKuLfHBPftbXNOSYOxGbZWFaHxpptuuqDy2M71kTtO311PIVlD2+KBwGCLr5Py06+VbqX42X1/cfmvQGeKLYUBVJW4M86nRj6jptFdtxS533czA5MIG6yNAOcAb0DhMMt6z3cfSqPANZjMOQ6gim+L4JdyW2AU3LRBMaFgMsiZ1Ph+Zrv4Q5PX9iYo/brz23MkOhBI1MJBnRiek0Qtl7jKwJCXUy6bI2USSBHOPnUdxsuJ1By3LYzgjUQpVt+fhPxojg3Eu7cqvswAAfEIEzv6/OmRkB2E/umMkjPauAbx4419J+FZibDW0QMBJV0ZuWWcyH3a6eQ8qO4+oWL9qUzEd4FJAnWG09SPh51Dh8b3yG3cMg8+YPIg0yQG6H/AAjiqd0tolgAPCxBA22J/GnuGe5qZPhj8q8wsg27hU7g79RyPwr0XsnxG33VxbjhSMuUkjUSdNd4iPSK48+CV8ofuhou3TGmO4ixUKAZ99UTirkY5WO5yH7vyq7HFYXxk3UL/ViYPh+A1ql9o7U30uoVKBVBhlJDS2kTJ3GtLgea6ktUGSXaH2OxFxWOsarp5GDv76VYvFXGiJ3irDxXAnvbImTctBpOmoVtNTyAAqDg3De85Dw52JJ0hQu0ep51zc5xdMVq2LkwtwIWOoMjedQB5+tDJgn00Ov5+tObzgWwI3j48z8zTDA21KFo3+GwmnjkZVwTdFPe7BIbMAurQNYGpgHSY86Ow3aPCp7ClT/8loXC3mW+r6KBRfGuHKbhS2qgvac9PFsPTcVRMVg3tuVdSrDkY26jyrswV2yLi0XW52stH6tr/okmoF7SYeSTbzayDbRLTDrGkNt9adqpbevzojAYV7hIQTAknkBtJPvrok01TSMrW7LYbZIWBOx+PWi8RgViZ6frejcRwzKqw0kASoRhJA60LnMSZGg676/ka8jNKakOoojxHDigMeX4+XpUNi21tg7KQSNfj+Qo9b5iB0+X6NN7Vu28ZvsjlHWTqNeVLjyPqXY31pq0VbE4vMdiY20ri1cL3FGUhdAdNhJ/OrBxLhKKpuJr5bc6XYbJuySdukHbWDVmT4u9lX7SeyB0dgD1H6FO+Gpms29Doq7gxsOdCdpGtBVLJpmM5SV5HeZn5VDgeNqctpMPsIBa6V2HXJXQ8bniW+hWhnjcT3KOyxJHh8iSY/P3VSVxTh2gyWOo3kmOvOnvH7zEKCqpuYDs/QCZURsaTcNXxs5+oNPU6D8ar8bHwjflgDrj27QJyh7hGs+wNjAH1tQNfKocJba8QqLOZgX8spkz5a0uxNwsT1Jq0cMsHD24jxtqx+4eg/OrsKRLjuDBUuEHVyC0kAkAxoOQ1pXbIa/pMW7ZUaayBk2/iFD8XxbHwzvv6CnfZ3DD+/fdlA9wjX3wPhQa0GrFL4W5bsPmtnM7EnaVXofn8qhxtiEsoBBbKx9SBqf5hVo4hxTLIUL6xP31XDjLly6i8gylsvQEHXyH5UGn2jPsKuWshKJOVdB+PzmsqW+4LMTctiWJiRpJJrKmlMGhZhOJXbZZCW0O0kRry/KrDgeLMwGZpqu8SWQt0bjRvMcvvj31mDvwJnT9aetVaCmO+OYbOveLuoI9VME/CKr+GbxAg67fj+FWbCYgOuUfOq3ct5LjryUgj03+4xQDY7uKXsup5qfjy+dVnB3IIqxWmhGMyApPyqr2xBgzRQOxjxN/Gj9Vg+4/1qydk0t3HYXBayi2SO9y5M8rEA/WjNqPPrSexwo3kUk5Ynlry89qsPCuDBBG5O5iPlRatUYYdtMLYbDoLC2jczrIshZiGnUAGNt6qd3htz6IrbaFQ5/I52MmT0NXJ1t2hLEenOkuP4mbnhXRfs9fM0KSRmeiJw4ticNcKgqlqCSTuAY05+186W8FwRS7iLY1dJXw6wrkCTrsNJBk7++y4C8DbttAkoNeeqg6V3hMKqXLtz613Lm05KsR95rklii5J/qPR5w1hzpkYnQaSw+XlR+FtXFKoVYMzZUSNWy+1lG533q/WMDhwP7m2PMKs7DbTTaluNwFs4iy6ootoHLakeIxlldjr/6pPooblRUcajWryPdVrYFt9XUroO7JiRrp0qp42+LrsLto5GYkXLfijkGBWZG+9el9q0t3LbkqCVs3QsEiJUchoduYNeMNaEyD8Rr8q6MeNKxXN2d43hJtsBDMCJVlEgj8+opnwZzbDKLYUOAHe6QMqgySBEz6VzhXFy21h21PitHkp5jrET+hSm2kMQwMg6joRuDO1Ot6ZpV2e84ayl1bb8soKjYQQCNBtXWO4EjKXCywTKBqRz1PWJ/9UFwi5Fu3p9ReZ+yKeWcQRU5QTCmJOFdnckF7cyqkyqHxZXkD3hd43orj3Cie5FsBT3uTXUZGXMxgfuU7TF9ak70GNNtR67fjSrFFKkEpeLwN20xV0JXqoLKZ8+tVritvK5dYCtuI2YbyPPevW3afMVWO0fBrdy25TwsAWgANJEmNQSPdSSxeUCW0eX4nBjEeEvlE6ab6EGJ050Tg+Bm3cF1WzFZ8JBA1UjWII3neuuKYY28PhmG7lzr0lAOnr7/OuMDxciFJ8Q6/d5iujElwSZJfqBdp7DEK2UaAg5QxmdtyfSq7hlKq8gqDG4jaevrXoovpc0MA9CdCfI8/voDH8OV1ykGJ+BFVjFRVI1FL4XbDX0G4Hi+AkfOKc8RxREnkOh/CtW+EdyxuZiYB0AA36Up4nfYmCCPxPL76wSKxbN26qmfEZb05/LSrfeORANvKq72ctxcztGoIA94/KmuOub+Ijy0/KsZsVY+9uZrgHu7cfXbVvwX3VwRLgbgeI6Dltt5x8DUWKuydT8DRSFsH72srjOOtZWsahlZbNbZTzFL8K2sHY/I/rSjsJc0PpS57JXzncDlWYIli4a0GJjy3pbxa5F4kEQQB745/GucCWMAC4WmNMwgddOlWjCcOEyQCTuSBJPU0KCAYOy11dPZMag6HqJppZ4Og+qp9QDTSzhgKkuXUtgliPSf1FY1HOHw6qNhA9wA/CoMZxhbYhNT1/L8zSfiXGSw08K/f6Dn6mkb3Gfc6fM+tazWHYnGtcMz7/wAR19a3h1kgee/uIoVQdOn6/Xuom3egjypWCz2Hg1ybFoz/AISf+Ao9TVI4N2jZMPaXuiSttVJLAaqoB0NF/wDNzf5Q/mpWtlFZanczvUTA1WP+bbk/3SfGfxrR7U3D/h2vifwalaYaGPG0+iufuN/4mvIsLhXuMFRSW35CB1JOgGter4p8TcteMYdRdUhfE0yRtoTrBn76X2+zdyxZC27qoxGuXLmdurOWHw5Chy4oKx8mUxezeJlWQW3IM6Ou45GY9KG4vhysXGQpc0W4h5NBhveBE84nnVhx7Yq3cQ3RlM5e8Uq2/s5421iJ6xOtZxPGC7aFwwGQFX2IyFsskHfKcrD39aRTtqx3jVNIuPZlxcsWm/0ge9fCfmKsSJVA4XxW5bs2rdsAZUA11Mxr9Xr50YvHsT9sD+FfyqtE6ZdAnlXQWqQ3GsSf8WPRFrluLYj/ADj/ACqPxrUGmX1UY6ASaHuIec++qT/a98f47e4gfPNWjxS82+Jcfxj861GpkPbPBC3Yw6iPozlHwUnf92apN8A68/1r61Yu0+Kcooe6bozSPFm1gjafOqq1zemitEpdk+G4gUOVufXY+Rp/g8bOk+4+z7juvzHlVUbxVxYxbWj9penMelOYvZVW0iGPIxr6EaN7qXXuD2ySe7WesCg8HxMMInMvMHcfkabWcRI8JzD7JPjHoT7XodfOia0xPiOFAEFZBGoiluMuMCfA8DfardmDAxr1GxHkQdQfKlmP4elwGRHmDBjp6VgNFQw90FmPUaT0mo7zTTrFcHREZkJkCddZikN1vX4VgVsgLVlamsrDjXh1kuSIgRr+VWDDcOUcqmweDVFCr8eZ9TTG1arCpEeGwwFHIAN4oLE463b0JlvsjU0mx2Pd5zHKv2Qdfefy+NYPQ2xnGgsrbEt15D1NV7GY4kyxzNy6D3UFexRPhTQVEiUAMlgtqxmszaQPjWmuSIGnWtgae74VgE1ppUGdwKnwlvOwAiBE6xpzofhtouixsNz8ufpTq0gUQoYD3b9dqVuhlGxulyR7UfxL+C1ySNgWPo/9KzDN4frE/h8KlVT5j3mlKnPdjz/mepMOQjq4k5SDBLkEgzB12rkz+m/pXCIxYLtJjVzGpjXSsYkxXaVc7LcU91cOYo3ge25JkodJ1mCPShv7e7sQbgu2j9oww9SOY5EU5xHBLBOS42e6hnKxhXU7ZG3APruNaCbh2BKsFtrI9u2zsHX93WfOoSWysWxLiuItd+iBZ/ECp0zBdypbaff0OlB8XxhyOIC5wLaKDMIsSdNOg+FPcR2esi2Ww9xs0SAxldZ8JKgEesmqJimfvCLghlMZdgvkBTY4XIE5Ui48Hv57KHKCYjUAnTadekUwVf8A41/lX86TcESLKyV1JOonc6c+gFHFR/o/l/rVaEsYJH2AP4U/GtO3+n/tt0As8gn8h/OpAD5fyN+dE1hQc/oW62HbqP8AsH/1oYM3In+U12br/aI9E/pQCZjLjZMrEMDuCR/tqsY/ClTmWCp85IPOdNqe4m65Htt/KP8AbQZDbS0HfRfyorQslZXmPP8AQrm6vKicZhTbOxgkwdKHcdOnw/pVEQZCyFSGUx5j7jTTAcTkgHwt8jS6dxUTWpE1jFztY0OfHIbYMND+RHkana5sHjXZhsfI/ZPlVMw2OZNH1XkeYp5hsaI5MpGoOxrBsZ37Aqu43ghZiyvA5LG1N/7QC7MCOjGGHo3P36+daXitpjBlfUfiJA99EJXf7EbqayrD+2Wv81P5l/Ot0Rdg39tAbKx+A/Gob/F3bSco6DU/zEae4e+srKUZAbXgo8z8/UnegLt9nNZWUDEltQKx3msrKyAzrQev61o3DYEuJ0ABAOsT5aA1qsrPoK7GVrDQICoB5f8A81Mtk/ZT4n/bWVlTKh1pNPYT4/8A612APsJ+v4a1WVhjGj7K/r3V3bJBkZQR/pka6da3WVgIT4sYogjRlQ+CW8Sj/S28eRqPDLibqC9mUASASTmaORj7zWVlRnpaKR7OuH8WOYj/AFZT0kxt5STQfaQBslz62YofMbj4a/GsrKaOpCz/AMo54Wx7q3r9QcvL1ozP5/IVlZVGIujQJ+03/b+VbLRrmb5flW6ysYjbEL9pvl/tqM4tBux/X8NZWVgkT4lD9c/A/lULOv2j861WUTM0yqwhpIPKT+dJMVY7toB03B8vT5VlZRROZF3Y35cx09KjBrKynJm3QH8NOf6FDWLrKZXbmDtW6ygMEtilcSAQelCPcrKyiY5/a26msrKysE//2Q==" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Indigo Pearl Hotel
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ถลาง, อำเภอถลาง, ภูเก็ต, ประเทศไทย, 83110
        </div><div class="text-caption text-grey">
          tel:076 211 044 <br> Email: info@pearlhotel.co.th
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="data:image/jpeg;base64,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" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            เดอะ เลค ฉลอง โฮเทล
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          หมู่ 6 ฉลอง อำเภอเมือง, ฉลอง, อำเภอเมืองภูเก็ต, ภูเก็ต, ประเทศไทย, 83130
        </div><div class="text-caption text-grey">
          tel:061 172 7517 <br> Email: -
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

    </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(5)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  left : center
  width: 100%
  max-width: 300px
  max-height:500px
</style>
