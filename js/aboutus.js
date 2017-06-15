/**
 * Created by Aaron on 2017/6/9.
 *
 */


const titleStyle = {
    lineHeight:5,
    margin:0,
    padding:0,
    textAlign: 'center',
    color:'white',
    backgroundColor:'#F2753F',
};

const aboutfeature1 = {
    margin:0,
    padding:60,
    color:'white',
    backgroundColor:'#44DB5E',
};

const aboutfeature2 = {
    margin:0,
    padding:60,
    color:'white',
    backgroundColor:'#FF9600',
};

const aboutfeature3 = {
    margin:0,
    padding:60,
    color:'white',
    backgroundColor:'#F45F55',
};

const intro = {
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:60,
    letterSpacing:2,
};

class AboutTitle extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h4 className="h2" style={titleStyle}>关于我们</h4>
                </div>

                <div className="container">
                    <div className="row">
                        <p className="col-md-6" style={intro}>上海星语儿童智能训练中心是一家非盈利民间机构，由专业的医生和特教老师组成的一家专业的为学习障碍、发育迟缓、孤独症、脑瘫等儿童及家庭提供专业性服务的机构。本机构主要以一对一或小组融合课的教学方式为主，授课内容有语言、认知、精细、感统、注意力等方面。
                            我们以“让儿童学会融合，走向自立”为使命，以“理解、尊重、全纳、关爱、坚持、责任”为理念，通过早期专业康复培训，并关怀儿童的家庭积极开展家长交流活动,提供长期家庭心理支持。同时举办各类公益活动，组织志愿者参与关爱特殊儿童的活动，大力倡导全社会都来关注特殊儿童，为他们建立一个更好的社会支持系统</p>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4" style={aboutfeature1}>
                            <div>
                                <h3><span>为什么选择我们</span></h3>
                                <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. <br/><br/>Sed ut perspiciaatis iste natus error sit voluptatem probably haven't heard of them accusamus.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={aboutfeature2}>
                            <h3><span>为什么选择我们</span></h3>
                            <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. <br/><br/>Sed ut perspiciaatis iste natus error sit voluptatem probably haven't heard of them accusamus.</p>

                        </div>
                        <div className="col-md-4" style={aboutfeature3}>
                            <h3><span>为什么选择我们</span></h3>
                            <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. <br/><br/>Sed ut perspiciaatis iste natus error sit voluptatem probably haven't heard of them accusamus.</p>

                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <img className="img-responsive" src="images/bg04.jpg" alt=""/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AboutTitle />, document.getElementById('root'));