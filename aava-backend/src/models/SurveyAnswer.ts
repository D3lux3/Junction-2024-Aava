import { DataTypes, ForeignKey, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { Company, Employee } from ".";

class SurveyAnswer extends Model {
    declare id: string;
    declare wbName: string;
    declare answerValue: number;
    declare employeeId: ForeignKey<Employee['id']>;
    declare companyId: ForeignKey<Company['id']>;
}

SurveyAnswer.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    wbName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'surveyanswer',
    tableName: 'surveyanswers',
    underscored: true,
    timestamps: false
});

export default SurveyAnswer;