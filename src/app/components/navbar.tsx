"use client"
import Link from "next/link";

export default function Navbar(){
    return(
        <header className="navbar">
        <span>

        <Link href={`/`} className="navbar-link" aria-label="home">
            <svg className="navbar-brand" width="187" height="48" viewBox="0 0 187 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1279 38.3554C11.6858 38.4057 10.3263 38.1973 9.0492 37.7302C7.78977 37.2442 6.66918 36.5431 5.68742 35.627C4.70567 34.7109 3.9282 33.6232 3.35503 32.3639C2.78186 31.1045 2.46899 29.7082 2.41643 28.1748C2.36387 26.6414 2.58037 25.2266 3.06594 23.9303C3.55151 22.634 4.24381 21.5041 5.14286 20.5406C6.05954 19.5582 7.13889 18.7894 8.3809 18.2343C9.62229 17.661 10.964 17.3491 12.4061 17.2987C13.8664 17.2477 15.2263 17.4653 16.4858 17.9513C17.7628 18.4184 18.8922 19.11 19.874 20.0261C20.8551 20.924 21.6326 22.0117 22.2064 23.2893C22.7795 24.5486 23.0921 25.9358 23.144 27.451C23.1966 28.9844 22.9801 30.3992 22.4945 31.6955C22.0089 32.9918 21.3078 34.1312 20.3911 35.1135C19.4745 36.0959 18.3954 36.8738 17.154 37.4472C15.9303 38.0016 14.5882 38.3044 13.1279 38.3554ZM13.0425 35.8636C14.5393 35.8114 15.8506 35.4092 16.9762 34.6571C18.1011 33.8867 18.9716 32.8877 19.5874 31.6599C20.2026 30.4139 20.4846 29.0425 20.4333 27.5456C20.382 26.0488 20.0071 24.7094 19.3086 23.5275C18.6102 22.3457 17.6738 21.4189 16.4993 20.7471C15.3243 20.0571 13.9884 19.7382 12.4915 19.7905C10.9947 19.8427 9.68377 20.2541 8.55879 21.0244C7.43318 21.7765 6.56245 22.7664 5.9466 23.9942C5.33075 25.2219 5.04848 26.5842 5.09979 28.0811C5.1511 29.578 5.52629 30.9265 6.22537 32.1266C6.92382 33.3084 7.86056 34.2444 9.0356 34.9344C10.2283 35.6055 11.5639 35.9153 13.0425 35.8636ZM33.0321 37.6603C31.6083 37.71 30.3101 37.4264 29.1376 36.8094C27.9644 36.1741 27.0201 35.2841 26.3047 34.1394C25.5892 32.9947 25.2061 31.6831 25.1555 30.2044C25.1048 28.7258 25.3883 27.4 26.006 26.227C26.6414 25.0351 27.5228 24.0905 28.6503 23.3932C29.7771 22.6776 31.0616 22.2947 32.5037 22.2443C33.9275 22.1946 35.226 22.4874 36.3992 23.1226C37.5717 23.7396 38.5066 24.6208 39.2038 25.7661C39.9186 26.8926 40.3014 28.1951 40.3521 29.6738C40.4034 31.1706 40.1022 32.5153 39.4486 33.7078C38.8132 34.8997 37.9318 35.8443 36.8043 36.5416C35.6769 37.239 34.4195 37.6119 33.0321 37.6603ZM32.9477 35.1959C33.8604 35.1641 34.674 34.9072 35.3885 34.4253C36.1213 33.9428 36.6841 33.3018 37.0771 32.5022C37.4876 31.6837 37.6757 30.7724 37.6413 29.7684C37.6069 28.7644 37.3572 27.8776 36.8922 27.1079C36.4454 26.3377 35.84 25.7374 35.0759 25.3072C34.3301 24.8763 33.5009 24.6768 32.5882 24.7087C31.6572 24.7412 30.8253 24.9987 30.0926 25.4812C29.378 25.9631 28.8152 26.6041 28.404 27.4044C27.9928 28.2046 27.8044 29.1067 27.8388 30.1107C27.8732 31.1147 28.1233 32.0107 28.5889 32.7986C29.0539 33.5682 29.6593 34.1685 30.4051 34.5994C31.1692 35.0296 32.0167 35.2284 32.9477 35.1959ZM43.0192 42.4655L42.3256 22.2303L44.8173 22.1433L44.8886 24.2243C45.4288 23.4561 46.1298 22.8468 46.9916 22.3963C47.8711 21.927 48.8675 21.6729 49.9811 21.634C51.3866 21.5849 52.6486 21.879 53.767 22.5161C54.8854 23.1533 55.7841 24.0449 56.463 25.1909C57.1413 26.3186 57.5058 27.6218 57.5565 29.1004C57.6066 30.5607 57.3322 31.8862 56.7334 33.0768C56.1339 34.2492 55.289 35.1925 54.1986 35.9068C53.1265 36.6205 51.8877 37.0018 50.4821 37.0509C49.4234 37.0879 48.4399 36.9212 47.5317 36.5508C46.6411 36.1616 45.8997 35.5935 45.3075 34.8466L45.5657 42.3766L43.0192 42.4655ZM50.206 34.5933C51.1369 34.5607 51.9505 34.3039 52.6468 33.8227C53.3613 33.3408 53.9151 32.7001 54.308 31.9005C54.7003 31.0826 54.8796 30.1808 54.8458 29.195C54.8114 28.191 54.5708 27.3039 54.124 26.5336C53.6767 25.7451 53.0801 25.1354 52.3343 24.7045C51.6067 24.273 50.7774 24.0735 49.8465 24.106C48.9338 24.1379 48.1113 24.4042 47.3792 24.9049C46.6464 25.3874 46.0744 26.0288 45.6632 26.8291C45.2703 27.6287 45.091 28.5305 45.1255 29.5345C45.1592 30.5202 45.3998 31.4074 45.8472 32.1959C46.3122 32.9656 46.9267 33.5655 47.6908 33.9957C48.4549 34.426 49.2933 34.6251 50.206 34.5933ZM65.3486 36.5318C63.87 36.5834 62.5706 36.2633 61.4503 35.5713C60.33 34.8794 59.5205 33.9207 59.0216 32.6954L61.014 31.6389C61.4645 32.5187 62.0636 33.2014 62.8113 33.687C63.5583 34.1544 64.3791 34.3725 65.2735 34.3412C66.0767 34.3132 66.7364 34.0982 67.2527 33.6964C67.7689 33.2946 68.0164 32.7833 67.9951 32.1627C67.9801 31.7246 67.8404 31.3822 67.5761 31.1356C67.3294 30.87 67.0301 30.6703 66.6783 30.5364C66.3441 30.3836 66.0206 30.2761 65.7078 30.2139L63.4683 29.6615C62.1232 29.343 61.1282 28.8386 60.4831 28.1483C59.8557 27.4392 59.5257 26.61 59.4932 25.6607C59.4631 24.7845 59.6562 24.0193 60.0724 23.3651C60.5063 22.692 61.1002 22.1595 61.8544 21.7677C62.6268 21.3752 63.4968 21.162 64.4642 21.1282C65.7603 21.083 66.9307 21.3711 67.9754 21.9925C69.0385 22.6134 69.8093 23.5094 70.2881 24.6807L68.24 25.7117C67.8851 24.9565 67.3625 24.3716 66.6721 23.9571C65.9993 23.5237 65.2613 23.321 64.4581 23.349C63.7279 23.3745 63.1409 23.5778 62.6971 23.9588C62.2715 24.3392 62.0687 24.8215 62.0888 25.4056C62.1032 25.8255 62.2246 26.1685 62.453 26.4347C62.6808 26.6826 62.9524 26.8741 63.2677 27.0093C63.5824 27.1263 63.8874 27.2253 64.1826 27.3064L66.6165 27.9341C67.8149 28.2395 68.7643 28.7455 69.4648 29.4521C70.1652 30.1587 70.5329 31.0232 70.568 32.0454C70.5968 32.8851 70.3943 33.6415 69.9604 34.3146C69.526 34.9695 68.9134 35.4935 68.1227 35.8866C67.3321 36.2798 66.4074 36.4948 65.3486 36.5318Z" fill="#121212" />
                <path d="M72.778 35.9434L72.0787 15.5439L80.7038 15.2427C82.8213 15.1687 84.4823 15.6408 85.6869 16.6587C86.9091 17.6578 87.5524 19.0975 87.6168 20.9777C87.6381 21.5983 87.5401 22.2049 87.3228 22.7973C87.1238 23.3891 86.7772 23.9404 86.283 24.4511C87.1987 25.0405 87.8255 25.7314 88.1633 26.5238C88.5188 27.2972 88.7119 28.1312 88.7426 29.0257C88.8114 31.0337 88.1986 32.6177 86.9042 33.7778C85.6098 34.9378 83.7761 35.5593 81.4031 35.6422L72.778 35.9434ZM76.5856 23.0626L81.2678 22.8991C81.925 22.8761 82.439 22.6754 82.8098 22.297C83.1982 21.8996 83.3818 21.3906 83.3606 20.7699C83.3393 20.1493 83.1216 19.6634 82.7075 19.3123C82.311 18.9424 81.7842 18.7689 81.127 18.7918L76.4448 18.9553L76.5856 23.0626ZM76.8954 32.0986L81.7692 31.9284C82.6272 31.8984 83.3033 31.6281 83.7975 31.1174C84.2917 30.6067 84.5254 29.9588 84.4985 29.1739C84.4709 28.3707 84.1932 27.7316 83.6651 27.2565C83.1371 26.7815 82.4442 26.559 81.5862 26.5889L76.7124 26.7591L76.8954 32.0986ZM95.6644 35.4731C93.8389 35.5369 92.414 35.0201 91.3895 33.9227C90.3826 32.8065 89.8472 31.3173 89.7834 29.4554L89.4727 20.392L93.5799 20.2486L93.8793 28.9834C93.9087 29.8413 94.1881 30.5261 94.7173 31.0376C95.246 31.5309 95.9119 31.7635 96.715 31.7355C97.5182 31.7074 98.1666 31.4289 98.6602 30.8999C99.1532 30.3527 99.385 29.6501 99.3556 28.7921L99.0561 20.0573L103.163 19.9139L103.676 34.8644L99.8424 34.9983L99.7795 33.1637C99.4212 33.9072 98.8833 34.4743 98.1656 34.8649C97.4473 35.2372 96.6136 35.44 95.6644 35.4731ZM111.453 34.9218C109.81 34.9791 108.364 34.6458 107.115 33.9218C105.883 33.179 105.026 32.158 104.543 30.859L107.506 29.33C107.917 30.1198 108.459 30.7314 109.131 31.1648C109.804 31.5982 110.542 31.8009 111.345 31.7729C112.55 31.7308 113.137 31.2625 113.107 30.368C113.086 29.7656 112.578 29.3447 111.583 29.1053L109.012 28.4823C107.777 28.1782 106.818 27.6543 106.134 26.9105C105.45 26.1485 105.09 25.2382 105.054 24.1794C105.022 23.2484 105.232 22.4278 105.682 21.7175C106.133 21.0073 106.781 20.4455 107.626 20.0322C108.47 19.6007 109.449 19.3654 110.562 19.3265C112.023 19.2755 113.312 19.5778 114.431 20.2332C115.568 20.8697 116.386 21.8007 116.885 23.0261L113.894 24.556C113.654 23.943 113.235 23.4642 112.639 23.1195C112.06 22.7559 111.405 22.5869 110.675 22.6124C110.146 22.6309 109.729 22.755 109.427 22.9849C109.142 23.2142 109.006 23.5205 109.02 23.9038C109.04 24.488 109.593 24.9164 110.681 25.1891L113.088 25.8179C114.341 26.1396 115.31 26.6632 115.993 27.3887C116.675 28.096 117.034 28.9881 117.071 30.0651C117.119 31.4524 116.628 32.5936 115.598 33.4885C114.569 34.3835 113.187 34.8612 111.453 34.9218ZM125.786 34.2568C123.979 34.3199 122.556 33.8852 121.519 32.9528C120.5 32.0015 119.96 30.6496 119.9 28.8971L119.694 22.9005L117.175 22.9885L117.053 19.4289L117.19 19.4241C118.778 19.3686 119.546 18.5742 119.494 17.0408L119.456 15.9455L123.563 15.8021L123.68 19.1975L127.184 19.0751L127.306 22.6347L123.802 22.7571L123.998 28.4799C124.05 29.995 124.924 30.723 126.622 30.6637C126.878 30.6547 127.196 30.6162 127.578 30.5481L127.698 34.0529C127.099 34.1652 126.461 34.2332 125.786 34.2568ZM136.221 34.0569C134.633 34.1123 133.243 33.8136 132.051 33.1607C130.858 32.4896 129.922 31.5719 129.242 30.4077C128.563 29.2434 128.198 27.9403 128.149 26.4982C128.097 25.0013 128.38 23.6572 128.997 22.466C129.633 21.2741 130.505 20.3207 131.613 19.6058C132.722 18.8908 133.988 18.5085 135.412 18.4588C137 18.4033 138.353 18.685 139.471 19.304C140.589 19.9229 141.45 20.7792 142.054 21.873C142.675 22.9479 143.01 24.179 143.057 25.5663C143.068 25.8584 143.059 26.1511 143.033 26.4445C143.024 26.7189 142.986 26.9578 142.92 27.1612L132.461 27.5264C132.602 28.4536 133.002 29.1889 133.66 29.7325C134.319 30.2761 135.15 30.5304 136.154 30.4953C136.884 30.4698 137.499 30.3021 138.001 29.9922C138.52 29.6816 138.917 29.2657 139.191 28.7444L142.531 30.1904C142.112 31.3016 141.339 32.215 140.212 32.9306C139.085 33.6279 137.754 34.0033 136.221 34.0569ZM135.525 21.7446C134.722 21.7726 134.045 22.0247 133.495 22.5009C132.963 22.9763 132.611 23.6466 132.44 24.5115L138.655 24.2945C138.537 23.5127 138.196 22.885 137.631 22.4112C137.067 21.9375 136.364 21.7153 135.525 21.7446ZM151.7 33.5163C150.24 33.5673 148.923 33.266 147.749 32.6125C146.575 31.959 145.63 31.0508 144.914 29.8878C144.216 28.7242 143.843 27.4214 143.793 25.9793C143.743 24.5189 144.036 23.1928 144.671 22.0009C145.306 20.7908 146.187 19.8188 147.313 19.0849C148.439 18.3511 149.714 17.9593 151.138 17.9096C152.945 17.8465 154.396 18.3258 155.491 19.3476L155.25 12.3105L159.357 12.1671L160.068 32.8951L156.234 33.029L156.185 31.6051C155.676 32.1895 155.024 32.6509 154.232 32.9893C153.457 33.3088 152.613 33.4844 151.7 33.5163ZM152.066 29.8025C153.18 29.7637 154.071 29.3579 154.739 28.5852C155.424 27.7937 155.746 26.7864 155.704 25.5633C155.663 24.3585 155.273 23.3852 154.535 22.6434C153.815 21.9009 152.898 21.5491 151.785 21.588C150.653 21.6275 149.736 22.0525 149.032 22.8629C148.328 23.6551 147.997 24.6445 148.037 25.831C148.079 27.0359 148.478 28.0088 149.234 28.75C149.991 29.4912 150.935 29.8421 152.066 29.8025ZM167.78 26.3205L167.023 12.2284L171.13 12.0849L171.339 26.1962L167.78 26.3205ZM167.722 32.6279L167.581 28.5206L171.688 28.3771L171.829 32.4844L167.722 32.6279ZM177.648 25.9759L176.89 11.8838L180.998 11.7404L181.207 25.8516L177.648 25.9759ZM177.59 32.2833L177.449 28.176L181.556 28.0326L181.697 32.1398L177.59 32.2833Z" fill="#F71C06" />
                <path d="M69.1169 45.4315L69.0171 42.5203C69.3357 42.494 69.6287 42.4552 69.9227 42.4449C99.3071 41.4171 153.861 39.7116 183.245 38.6636C184.085 38.6343 184.268 38.897 184.271 39.6756C184.278 41.5961 184.314 41.6049 182.401 41.6717C157.916 42.5268 108.265 44.0611 83.7798 44.9144C79.2496 45.0726 74.7195 45.2342 70.1893 45.3941C69.8619 45.4055 69.5345 45.4169 69.1169 45.4315ZM100.031 44.246C101.153 43.2936 101.236 42.9004 100.566 41.9029C99.3874 42.4403 99.173 43.3089 100.031 44.246ZM83.6754 44.2604C84.2265 43.9452 84.9753 43.882 84.8164 43.0517C84.7878 42.9013 84.1116 42.6895 83.8847 42.805C83.3242 43.0903 83.2116 43.6106 83.6754 44.2604ZM91.5872 43.1735C91.6784 43.1989 91.7695 43.2226 91.8607 43.248C91.9612 43.0091 92.2062 42.691 92.1277 42.5491C92.01 42.3346 91.6707 42.2422 91.4249 42.0994C91.3685 42.1619 91.3122 42.2244 91.2575 42.2885C91.368 42.5841 91.4767 42.878 91.5872 43.1735Z" fill="#F71C06" />
                <path d="M182.528 6.45396L67.9109 10.2113L67.8139 7.38233C68.1075 7.35862 68.4255 7.31892 68.7446 7.30778C90.1229 6.5646 135.141 4.99926 156.519 4.2544C164.497 3.9758 173.465 3.91121 181.442 3.59733C182.261 3.56539 182.531 3.80654 182.477 4.60231C182.436 5.18061 182.505 5.76688 182.528 6.45396ZM156.336 5.73416C156.699 5.36489 156.937 5.12113 157.176 4.87899C156.98 4.72437 156.738 4.4082 156.594 4.44855C156.268 4.539 155.988 4.80444 155.69 4.99816C155.862 5.19566 156.035 5.39315 156.334 5.73589L156.336 5.73416Z" fill="#F71C06" />
            </svg>
        </Link>
        </span>

        <button className="navbar-toggle"  aria-label="Toggle navigation menu" id="navbarToggleBtn"><svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" onClick={()=> {
            const nav = document.querySelector('.navbar-nav-list')
            nav?.classList.toggle('open')
            }}>
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#121212" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
        </button>
        <nav className="navbar-nav">
            <ul className="navbar-nav-list" id="navbarList">
                <li className="navbar-nav-item navbar-nav-item-badged ">
                    <Link href={`/feeds`} className="navbar-link" aria-label="Busted feed Hot : see all feeds" >Busted feed <span className="navbar-badge">HOT</span></Link>
                </li>
                <li className="navbar-nav-item">
                    <a onClick={()=> {
                        document.getElementById("#faq")?.scrollIntoView();
                    }} href={`/#faq`} className="navbar-link" aria-label="FAQ">FAQ</a>
                </li>
                <li className="navbar-nav-item">
                    <Link href={`/contactus`} className="navbar-link" aria-label="Contact us">Contact us</Link>
                </li>
                <li className="navbar-nav-item">
                    <Link href={`/search`} className="cta navbar-link  navbar-cta" aria-label="Start Searching">Start Searching</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}