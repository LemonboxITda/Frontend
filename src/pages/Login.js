

const Login = () => {
    return (
        <div>
            <h3 style={{ margin: '50px 0' }}>로그인</h3>
            <form class="container col-lg-4 col-sm-6 col-10">
                <div class="row justify-content-center">
                    <div class="mb-4">
                        <input type="text" id="form2Example1" class="form-control" placeholder="아이디" />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder="비밀번호" />
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4 col-12">로그인</button>

                <div class="text-center">
                    <p>회원이 아니신가요? <a href="/signup">회원가입</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;