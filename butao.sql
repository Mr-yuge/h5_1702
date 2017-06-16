/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : butao

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-15 18:00:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `pasint` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES ('1', '苹果7', '手机', '红色');
INSERT INTO `good` VALUES ('2', 'sdasd', 'asdasda', 'sdasd');
INSERT INTO `good` VALUES ('3', 'sdas', 'asdasd', 'asdas');
INSERT INTO `good` VALUES ('4', 'sdsz', 'czczx', ' czxczxcxzc');
INSERT INTO `good` VALUES ('5', 'sadasd', 'asdasda', 'sdas');
INSERT INTO `good` VALUES ('6', 'edccsc', 'zxczxc', 'zczxc');
INSERT INTO `good` VALUES ('7', 'dsfsd', 'fsdfsf', 'sfsfd');
INSERT INTO `good` VALUES ('8', 'xdxfgvd', 'vgdsf', 'sdfsfd');
INSERT INTO `good` VALUES ('9', 'dssadasd', 'asdasd', 'asdas');
INSERT INTO `good` VALUES ('10', 'sadasdasd', 'asdas', 'dasdasd');
INSERT INTO `good` VALUES ('11', 'xzfcszdsa', 'dasdas', 'dasdas');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(25) unsigned NOT NULL AUTO_INCREMENT,
  `titlename` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `cost` varchar(255) DEFAULT NULL,
  `dis` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu1.jpg', '139.00', '￥139.00', '1.4折', '1');
INSERT INTO `list` VALUES ('2', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu2.jpg', '99.00', '￥99.00', '3折', '1');
INSERT INTO `list` VALUES ('3', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu3.jpg', '29.90', '￥129.00', '2.3折', '1');
INSERT INTO `list` VALUES ('4', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu4.jpg', '19.90', '￥109.00', '1.8折', '1');
INSERT INTO `list` VALUES ('5', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu5.jpg', '69.9', '￥69', '10折', '1');
INSERT INTO `list` VALUES ('6', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu6.jpg', '69.9', '￥143.00', '4.8折', '1');
INSERT INTO `list` VALUES ('7', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增..', '../img/neirong/tu7.jpg', '78.00', '￥177.00', '4.4折', '1');
INSERT INTO `list` VALUES ('8', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增..', '../img/neirong/tu8.jpg', '118.00', '￥235.00', '5折', '1');
INSERT INTO `list` VALUES ('9', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增..', '../img/neirong/tu9.jpg', '218', '￥443.00', '4.9折', '1');
INSERT INTO `list` VALUES ('10', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu10.jpg', '299.9', '￥626.00', '4.8折', '1');
INSERT INTO `list` VALUES ('11', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu11.jpg', '428', '￥953.00', '4.5折', '1');
INSERT INTO `list` VALUES ('12', '【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...', '../img/neirong/tu12.jpg', '178', '￥413.00', '4.3折', '1');
INSERT INTO `list` VALUES ('13', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t1.jpg', '159', '￥159.00', '10折', '1');
INSERT INTO `list` VALUES ('14', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t2.jpg', '139', '￥139.00', '10折', '1');
INSERT INTO `list` VALUES ('15', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t3.jpg', '69', '￥69.00', '10折', '1');
INSERT INTO `list` VALUES ('16', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t4.jpg', '99', '￥99.00', '10折', '1');
INSERT INTO `list` VALUES ('17', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t5.jpg', '199', '￥199.00', '10折', '1');
INSERT INTO `list` VALUES ('18', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t6.jpg', '199', '￥199.00', '10折', '1');
INSERT INTO `list` VALUES ('19', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t7.jpg', '179', '￥179.00', '10折', '1');
INSERT INTO `list` VALUES ('20', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t8.jpg', '199', '￥199.00', '10折', '1');
INSERT INTO `list` VALUES ('21', '森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款', '../img/neirong/t9.jpg', '179', '￥179.00', '10折', '1');
INSERT INTO `list` VALUES ('22', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u1.jpg', '59', '￥139.00', '4.3折', '1');
INSERT INTO `list` VALUES ('23', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u2.jpg', '109.9', '￥159.90', '6.9折', '1');
INSERT INTO `list` VALUES ('24', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u3.jpg', '179', '￥179.00', '10折', '1');
INSERT INTO `list` VALUES ('25', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u4.jpg', '139', '￥139.00', '10折', '1');
INSERT INTO `list` VALUES ('26', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u5.jpg', '89', '￥89.00', '10折', '1');
INSERT INTO `list` VALUES ('27', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u6.jpg', '159', '￥159.00', '10折', '1');
INSERT INTO `list` VALUES ('28', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u7.jpg', '99.00', '￥99.00', '10折', '1');
INSERT INTO `list` VALUES ('29', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u8.jpg', '99.00', '￥99.00', '10折', '1');
INSERT INTO `list` VALUES ('30', '森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮', '../img/neirong/u9.jpg', '199.00', '￥199.00', '10折', '1');
INSERT INTO `list` VALUES ('31', '巴拉巴拉童鞋女童单鞋中大童2017夏季新款凉鞋儿童公主鞋子休闲夏', '../img/neirong/f4.jpg', '149.00', '￥199.00', '7.5折', '1');
INSERT INTO `list` VALUES ('32', '巴拉巴拉童装男童牛仔裤中大童裤子2017新款儿童牛仔长裤男休闲裤', '../img/neirong/fv4.jpg', '119.00', '￥159.00', '7.5折', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  `emil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('68', '123123', '4297f44b13955235245b2497399d7a93', '461101338@qq.com');
INSERT INTO `user` VALUES ('69', '123123123', 'f5bb0c8de146c67b44babbf4e6584cc0', '461101338@qq.com');
INSERT INTO `user` VALUES ('70', 'wujiamin', '8af4bc482b8b8c7e82e57a03781967c9', '544281307@qq.com');
INSERT INTO `user` VALUES ('75', '1231233', 'e10adc3949ba59abbe56e057f20f883e', '461101338@qq.co');
INSERT INTO `user` VALUES ('76', '1111111', '8af4bc482b8b8c7e82e57a03781967c9', '46110133@qq.com');
INSERT INTO `user` VALUES ('77', '11111111', '8af4bc482b8b8c7e82e57a03781967c9', '46110138@qq.com');
INSERT INTO `user` VALUES ('78', 'wuzhenyu', 'e10adc3949ba59abbe56e057f20f883e', '461101338@qqq.com');
INSERT INTO `user` VALUES ('79', 'wuzhenyu520', '8af4bc482b8b8c7e82e57a03781967c9', '461101338@q.com');
INSERT INTO `user` VALUES ('80', 'wuzhenyu2', '8af4bc482b8b8c7e82e57a03781967c9', '123456678@13.com');
INSERT INTO `user` VALUES ('81', 'wuzhenyu2', '8af4bc482b8b8c7e82e57a03781967c9', '123456678@13.com');
INSERT INTO `user` VALUES ('82', 'wuzhenyu1', '8af4bc482b8b8c7e82e57a03781967c9', '12345667866@13.com');
