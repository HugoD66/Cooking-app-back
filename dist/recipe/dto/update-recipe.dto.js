"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecipeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_recipe_dto_1 = require("./create-recipe.dto");
const typeorm_1 = require("typeorm");
const ingredient_entity_1 = require("../../ingredient/entities/ingredient.entity");
class UpdateRecipeDto extends (0, swagger_1.PartialType)(create_recipe_dto_1.CreateRecipeDto) {
}
exports.UpdateRecipeDto = UpdateRecipeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateRecipeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateRecipeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToMany)(() => ingredient_entity_1.Ingredient, ingredient => ingredient.recipe),
    __metadata("design:type", Array)
], UpdateRecipeDto.prototype, "ingredients", void 0);
//# sourceMappingURL=update-recipe.dto.js.map